import React from 'react'

// Custom components
import AccordionPanel from '../../components/panels-demo/AccordionPanel'
import Panel from '../../components/panels-demo/Panel'
import TabView from '../../components/panels-demo/TabView'
import Fieldset from '../../components/panels-demo/Fieldset'
import Toolbar from '../../components/panels-demo/Toolbar'

const PanelsDemo = () => (
  <div className='p-grid'>
    <div className='p-col-12'>
      <AccordionPanel />
    </div>

    <div className='p-col-12'>
      <Panel />
    </div>

    <div className='p-col-12'>
      <TabView />
    </div>

    <div className='p-col-12'>
      <Fieldset />
    </div>

    <div className='p-col-12'>
      <Toolbar />
    </div>
  </div>
)

export default PanelsDemo
