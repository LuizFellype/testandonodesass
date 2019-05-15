import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Theme Components (comment when build)
import ThemeRoutes from './template/ThemeRoutes'

// Project Pages
import Home from './pages/home/Home'
import Login from './pages/auth/Login'

// Project Components, Services and Utilities
import { Admin } from './containers'

const authService = {
  isAuthenticated: () => true
}

const isDevelopMode = () => process.env.NODE_ENV === 'development'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated() ? (
        <Admin {...props} isDevelopMode={isDevelopMode}>
          <Component {...props} />
        </Admin>
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
    }
  />
)

function Router() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/' component={Home} />
      <ThemeRoutes /> {/* (comment when build) */}
    </Switch>
  )
}

export default Router
