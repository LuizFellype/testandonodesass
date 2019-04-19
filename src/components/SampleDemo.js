import React, { Component } from 'react'
import { CarService } from '../service/CarService'
import { NodeService } from '../service/NodeService'
import { Tree } from 'primereact/tree'
import { Menu } from 'primereact/menu'

import FormElements from './form/FormElements'
import DataTable from './table/DataTable'
import DataView from './dataView/DataView'
import PickList from './pick/Pick'
import OrderList from './orderList/OrderList'
import ProgressBar from './progressbar/ProgressBar'
import PanelMenu from './menu/PanelMenu'
import AccordionPanel from './accordion/AccordionPanel'
import TabView from './tab/TabView'
import Panel from './panel/Panel'

export class SampleDemo extends Component {
  constructor() {
    super()
    this.state = {
      countriesData: [],
      selectedNodeKey: null,
      checkboxValue: [],
      treeData: [],
      menuItems: [
        {
          label: 'Options',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              command: () => (window.location.hash = '/fileupload')
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash',
              url: 'http://primetek.com.tr'
            }
          ]
        },
        {
          label: 'Account',
          items: [
            {
              label: 'Options',
              icon: 'pi pi-fw pi-cog',
              command: () => (window.location.hash = '/')
            },
            { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' }
          ]
        }
      ]
    }

    this.carService = new CarService()
    this.nodeService = new NodeService()
  }

  componentDidMount() {
    this.nodeService
      .getTreeNodes(this)
      .then(nodes => this.setState({ treeData: nodes }))
  }

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

            <div className='card card-w-title'>
              <h1>Tree</h1>
              <Tree
                value={this.state.treeData}
                selectionMode='single'
                selectionKeys={this.state.selectedNodeKey}
                onSelectionChange={e =>
                  this.setState({ selectedNodeKey: e.value })
                }
              />
            </div>

            <div className='card card-w-title'>
              <h1>Menu</h1>
              <Menu model={this.state.menuItems} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
