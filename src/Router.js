import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Home
import Dashboard from './pages/Dashboard'

// Components
import FormsDemo from './pages/components/FormsDemo'
import SampleDemo from './pages/components/SampleDemo'
import PanelsDemo from './pages/components/PanelsDemo'
import OverlaysDemo from './pages/components/OverlaysDemo'
import MenusDemo from './pages/components/MenusDemo'
import MessagesDemo from './pages/components/MessagesDemo'
import MiscDemo from './pages/components/MiscDemo'
import DataDemo from './pages/components/DataDemo'
import ChartsDemo from './pages/components/ChartsDemo'

// Template Pages
import EmptyPage from './pages/template-pages/EmptyPage'

// Documentation
import Documentation from './pages/documentation/Documentation'

function Router() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/forms' component={FormsDemo} />
      <Route path='/sample' component={SampleDemo} />
      <Route path='/data' component={DataDemo} />
      <Route path='/panels' component={PanelsDemo} />
      <Route path='/overlays' component={OverlaysDemo} />
      <Route path='/menus' component={MenusDemo} />
      <Route path='/messages' component={MessagesDemo} />
      <Route path='/charts' component={ChartsDemo} />
      <Route path='/misc' component={MiscDemo} />
      <Route path='/empty' component={EmptyPage} />
      <Route path='/documentation' component={Documentation} />
    </Switch>
  )
}

export default Router
