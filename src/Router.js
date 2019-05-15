import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Theme Components
import Dashboard from './template/pages/Dashboard'
import FormsDemo from './template/pages/components/FormsDemo'
import SampleDemo from './template/pages/components/SampleDemo'
import PanelsDemo from './template/pages/components/PanelsDemo'
import OverlaysDemo from './template/pages/components/OverlaysDemo'
import MenusDemo from './template/pages/components/MenusDemo'
import MessagesDemo from './template/pages/components/MessagesDemo'
import MiscDemo from './template/pages/components/MiscDemo'
import DataDemo from './template/pages/components/DataDemo'
import ChartsDemo from './template/pages/components/ChartsDemo'
import Documentation from './template/pages/documentation/Documentation'

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

function ThemeRoutes() {
  if (isDevelopMode()) {
    return (
      <>
        <PrivateRoute exact path='/theme' component={Dashboard} />
        <PrivateRoute path='/theme/forms' component={FormsDemo} />
        <PrivateRoute path='/theme/sample' component={SampleDemo} />
        <PrivateRoute path='/theme/data' component={DataDemo} />
        <PrivateRoute path='/theme/panels' component={PanelsDemo} />
        <PrivateRoute path='/theme/overlays' component={OverlaysDemo} />
        <PrivateRoute path='/theme/menus' component={MenusDemo} />
        <PrivateRoute path='/theme/messages' component={MessagesDemo} />
        <PrivateRoute path='/theme/charts' component={ChartsDemo} />
        <PrivateRoute path='/theme/misc' component={MiscDemo} />
        <PrivateRoute path='/theme/documentation' component={Documentation} />
      </>
    )
  }

  return null
}

function Router() {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/' component={Home} />
      <ThemeRoutes />
    </Switch>
  )
}

export default Router
