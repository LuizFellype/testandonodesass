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
import { Route } from 'react-router'

function ThemeRoutes() {
  if (process.env.NODE_ENV === 'development') {
    return (
      <>
        <Route exact path='/theme' component={Dashboard} />
        <Route path='/theme/forms' component={FormsDemo} />
        <Route path='/theme/sample' component={SampleDemo} />
        <Route path='/theme/data' component={DataDemo} />
        <Route path='/theme/panels' component={PanelsDemo} />
        <Route path='/theme/overlays' component={OverlaysDemo} />
        <Route path='/theme/menus' component={MenusDemo} />
        <Route path='/theme/messages' component={MessagesDemo} />
        <Route path='/theme/charts' component={ChartsDemo} />
        <Route path='/theme/misc' component={MiscDemo} />
        <Route path='/theme/documentation' component={Documentation} />
      </>
    )
  }

  return null
}

export default ThemeRoutes
