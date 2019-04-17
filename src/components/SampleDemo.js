import React, { Component } from 'react'
import { CarService } from '../service/CarService'
import { NodeService } from '../service/NodeService'
import { Tree } from 'primereact/tree'
import { Menu } from 'primereact/menu'
import { PanelMenu } from 'primereact/panelmenu'
import { OrderList } from 'primereact/orderlist'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Panel } from 'primereact/panel'
import { TabView, TabPanel } from 'primereact/tabview'
import { ProgressBar } from 'primereact/progressbar'

import FormElements from './form/FormElements'
import DataTable from './table/DataTable'
import DataView from './dataView/DataView'
import PickList from './pick/Pick'

export class SampleDemo extends Component {
  constructor() {
    super()
    this.state = {
      countriesData: [],
      selectedNodeKey: null,
      checkboxValue: [],
      treeData: [],
      orderlistCars: [],
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
      ],
      panelMenuItems: [
        {
          label: 'Documents',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [
                {
                  label: 'Bookmark',
                  icon: 'pi pi-fw pi-bookmark'
                },
                {
                  label: 'Video',
                  icon: 'pi pi-fw pi-video'
                }
              ]
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            },
            {
              separator: true
            },
            {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link'
            }
          ]
        },
        {
          label: 'Manage',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Left',
              icon: 'pi pi-fw pi-align-left'
            },
            {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right'
            },
            {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center'
            },
            {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify'
            }
          ]
        },
        {
          label: 'Accounts',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-user-plus'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus'
            },
            {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [
                {
                  label: 'Filter',
                  icon: 'pi pi-fw pi-filter',
                  items: [
                    {
                      label: 'Print',
                      icon: 'pi pi-fw pi-print'
                    }
                  ]
                },
                {
                  icon: 'pi pi-fw pi-bars',
                  label: 'List'
                }
              ]
            }
          ]
        },
        {
          label: 'Calendar',
          icon: 'pi pi-fw pi-calendar',
          items: [
            {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                {
                  label: 'Save',
                  icon: 'pi pi-fw pi-calendar-plus'
                },
                {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-calendar-minus'
                }
              ]
            },
            {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [
                {
                  label: 'Remove',
                  icon: 'pi pi-fw pi-calendar-minus'
                }
              ]
            }
          ]
        }
      ]
    }

    this.carService = new CarService()
    this.nodeService = new NodeService()

    this.orderListTemplate = this.orderListTemplate.bind(this)
  }

  componentDidMount() {
    this.nodeService
      .getTreeNodes(this)
      .then(nodes => this.setState({ treeData: nodes }))
    this.carService
      .getCarsSmall()
      .then(data => this.setState({ orderlistCars: data }))
  }

  orderListTemplate(car) {
    if (!car) {
      return
    }

    return (
      <div className='p-clearfix'>
        <img
          src={`assets/demo/images/car/${car.brand}.png`}
          alt={car.brand}
          style={{
            display: 'inline-block',
            margin: '2px 0 2px 2px',
            width: '50px'
          }}
        />
        <div style={{ fontSize: 14, float: 'right', margin: '15px 5px 0 0' }}>
          {car.brand} - {car.year} - {car.color}
        </div>
      </div>
    )
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

            <div className='card card-w-title'>
              <h1>OrderList</h1>
              <OrderList
                value={this.state.orderlistCars}
                responsive
                header='OrderList'
                listStyle={{ height: 250 }}
                itemTemplate={this.orderListTemplate}
                onChange={event =>
                  this.setState({ orderlistCars: event.value })
                }
              />
            </div>

            <div className='card card-w-title'>
              <h1>ProgressBar</h1>
              <ProgressBar value={50} />
            </div>

            <div className='card card-w-title'>
              <h1>PanelMenu</h1>
              <PanelMenu model={this.state.panelMenuItems} />
            </div>
          </div>
          <div className='p-col-12 p-lg-6'>
            <div className='card card-w-title'>
              <h1>Accordion Panel</h1>
              <Accordion>
                <AccordionTab header='Godfather I'>
                  The story begins as Don Vito Corleone, the head of a New York
                  Mafia family, oversees his daughters wedding. His beloved son
                  Michael has just come home from the war, but does not intend
                  to become part of his fathers business. Through Michaels life
                  the nature of the family business becomes clear. The business
                  of the family is just like the head of the family, kind and
                  benevolent to those who give respect, but given to ruthless
                  violence whenever anything stands against the good of the
                  family.
                </AccordionTab>
                <AccordionTab header='Godfather II'>
                  Francis Ford Coppolas legendary continuation and sequel to his
                  landmark 1972 film, The_Godfather parallels the young Vito
                  Corleone-s rise with his son Michael-s spiritual fall,
                  deepening The_Godfathers depiction of the dark side of the
                  American dream. In the early 1900s, the child Vito flees his
                  Sicilian village for America after the local Mafia kills his
                  family. Vito struggles to make a living, legally or illegally,
                  for his wife and growing brood in Little Italy, killing the
                  local Black Hand Fanucci after he demands his customary cut of
                  the tyro-s business. With Fanucci gone, Vito-s communal
                  stature grows.
                </AccordionTab>
                <AccordionTab header='Godfather III'>
                  After a break of more than 15 years, director Francis Ford
                  Coppola and writer Mario Puzo returned to the well for this
                  third and final story of the fictional Corleone crime family.
                  Two decades have passed, and crime kingpin Michael Corleone,
                  now divorced from his wife Kay has nearly succeeded in keeping
                  his promise that his family would one day be completely
                  legitimate.
                </AccordionTab>
              </Accordion>

              <h1>TabView</h1>
              <TabView>
                <TabPanel header='Godfather I' leftIcon='pi pi-check'>
                  The story begins as Don Vito Corleone, the head of a New York
                  Mafia family, overseeshis daughter-s wedding. His beloved son
                  ichael has just come home from the war, but does not intend to
                  become part of his father-s business. Through Michael-s life
                  the nature of the family business becomes clear. The business
                  of the family is just like the head of the family, kind and
                  benevolent to those who give respect, but given to ruthless
                  violence whenever anything stands against the good of the
                  family.
                </TabPanel>
                <TabPanel header='Godfather II' leftIcon='pi pi-user'>
                  Francis Ford Coppola-s legendary continuation and sequel to
                  his landmark 1972 film, The_Godfather parallels the young Vito
                  Corleone-s rise with his son Michael-s spiritual fall,
                  deepening The_Godfather-s depiction of the dark side of the
                  American dream. In the early 1900s, the child Vito flees his
                  Sicilian village for America after the local Mafia kills his
                  family. Vito struggles to make a living, legally or illegally,
                  for his wife and growing brood in Little Italy.
                </TabPanel>
                <TabPanel header='Godfather III'>
                  The Godfather Part III is set in 1979 and 1980. Michael has
                  moved back to New York and taken great strides to remove the
                  family from crime. He turns over his New York criminal
                  interests to longtime enforcer Joey Zasa. He uses his wealth
                  in an attempt to rehabilitate his reputation through numerous
                  philanthropic acts, administered by a foundation named after
                  his father. A decade earlier, he gave custody of his two
                  children to Kay, who has since remarried.
                </TabPanel>
              </TabView>
            </div>

            <div className='card card-w-title'>
              <h1>Panel</h1>
              <Panel header='Godfather I' toggleable>
                The story begins as Don Vito Corleone, the head of a New York
                Mafia family, oversees his daughter-s wedding. His beloved son
                Michael has just come home from the war, but does not intend to
                become part of his father-s business. Through Michael-s life the
                nature of the family business becomes clear. The business of the
                family is just like the head of the family, kind and benevolent
                to those who give respect, but given to ruthless violence
                whenever anything stands against the good of the family.
              </Panel>
            </div>

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
