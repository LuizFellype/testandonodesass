import React, { Component } from 'react'

// Customized SampleDemo page components
import FormElements from './form/FormElements'
import DataTable from './table/DataTable'
import DataView from './dataView/DataView'
import PickList from './pick/Pick'
import OrderList from './orderList/OrderList'
import ProgressBar from './progressbar/ProgressBar'
import PanelMenu from './panelMenu/PanelMenu'
import AccordionPanel from './accordion/AccordionPanel'
import TabView from './tab/TabView'
import Panel from './panel/Panel'
import Tree from './tree/Tree'
import Menu from './menu/Menu'

export class SampleDemo extends Component {
  render() {
    return (
      <div className='p-fluid'>
        <div className='p-grid'>
          <div className='p-col-12'>
            <div
              className='p-messages p-component p-messages-success'
              style={{ margin: '0 0 1em 0', display: 'block' }}
            >
              <div className='p-messages-wrapper'>
                <span className='p-messages-icon pi pi-fw pi-2x pi-check' />
                <ul>
                  <li>
                    <span className='p-messages-detail'>
                      Designer API is a theme engine for the complete PrimeReact
                      UI Suite and includes this demo application to test the
                      commonly used components while designing your theme.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <FormElements />
            <DataTable />
          </div>

          <DataView />

          <div className='p-col-12 p-lg-6'>
            <PickList />
            <OrderList />
            <ProgressBar />
            <PanelMenu />
          </div>

          <div className='p-col-12 p-lg-6'>
            <div className='card card-w-title'>
              <AccordionPanel />
              <TabView />
            </div>

            <Panel />
            <Tree />
            <Menu />
          </div>
        </div>
      </div>
    )
  }
}
