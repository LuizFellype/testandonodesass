import React from 'react'
import Dashboard from './pages/Dashboard'
import FormsDemo from './pages/components/FormsDemo'
import SampleDemo from './pages/components/SampleDemo'
import PanelsDemo from './pages/components/PanelsDemo'
import OverlaysDemo from './pages/components/OverlaysDemo'
import MenusDemo from './pages/components/MenusDemo'
import MessagesDemo from './pages/components/MessagesDemo'
import MiscDemo from './pages/components/MiscDemo'
import DataDemo from './pages/components/DataDemo'
import ChartsDemo from './pages/components/ChartsDemo'
import Documentation from './pages/documentation/Documentation'
import { PrivateRoute } from '../Router'

function ThemeRoutes() {
  if (process.env.NODE_ENV === 'development') {
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

export default ThemeRoutes
