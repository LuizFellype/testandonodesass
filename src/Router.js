import { createHashHistory } from 'history'
import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

// Project Pages
import Home from './pages/home/Home'
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
        <RouteWithTheme exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
