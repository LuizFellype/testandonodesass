import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Home
import Dashboard from './template/pages/Dashboard'

// Components
import FormsDemo from './template/pages/components/FormsDemo'
import SampleDemo from './template/pages/components/SampleDemo'
import PanelsDemo from './template/pages/components/PanelsDemo'
import OverlaysDemo from './template/pages/components/OverlaysDemo'
import MenusDemo from './template/pages/components/MenusDemo'
import MessagesDemo from './template/pages/components/MessagesDemo'
import MiscDemo from './template/pages/components/MiscDemo'
import DataDemo from './template/pages/components/DataDemo'
import ChartsDemo from './template/pages/components/ChartsDemo'

// Template Pages
import EmptyPage from './template/pages/template-pages/EmptyPage'

// Documentation
import Documentation from './template/pages/documentation/Documentation'

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={EmptyPage} />
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
    </Switch>
  )
}

export default Router
