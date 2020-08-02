import { createHashHistory } from 'history'
import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

// Project Pages
import CoursesPage from './pages/courses/Courses'
import DisciplinesPage from './pages/disciplines/Disciplines'
import ClassesPage from './pages/classes/Classes'
import UsersPage from './pages/users/Users'
import Login from './pages/auth/Login'

// Project Components, Services and Utilities
import { Admin } from './containers'

const authService = {
  isAuthenticated: () => true
}

const history = createHashHistory()

export const RouteWithTheme = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated() ? (
        <Admin {...props}>
          <Component {...props} />
        </Admin>
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
    }
  />
)

function RouterConfig () {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={Login} />

        <RouteWithTheme path='/courses' component={CoursesPage} />
        <RouteWithTheme path='/disciplines' component={DisciplinesPage} />
        <RouteWithTheme path='/classes' component={ClassesPage} />
        <RouteWithTheme path='/users' component={UsersPage} />

        <Redirect exact path='/' to='/courses' />
      </Switch>
    </Router>
  )
}

export default RouterConfig
