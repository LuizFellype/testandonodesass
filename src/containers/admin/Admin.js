import React, { useState, useRef, useEffect } from 'react'
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel'
import classNames from 'classnames'

// Layout
import Topbar from './TopBar/Topbar'
import Menu from './Menu/Menu'
import Footer from './Footer'

// Components

// CSS
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'fullcalendar/dist/fullcalendar.css'
import '../../layout/layout.css'

const defaultThemeMenu = []

export const Admin = React.memo(props => {
  const [layoutMode, setLayoutMode] = useState('static')
  const [layoutColorMode, setLayoutColorMode] = useState('dark')
  const [staticMenuInactive, setStaticMenuInactive] = useState(false)
  const [overlayMenuActive, setOverlayMenuActive] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  const { history, children, isDevelopMode } = props

  const layoutMenuScroller = useRef(null)

  const addClass = (element, className) => {
    if (element.classList) element.classList.add(className)
    else element.className += ' ' + className
  }

  const removeClass = (element, className) => {
    if (element.classList) element.classList.remove(className)
    else {
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      )
    }
  }

  useEffect(() => {
    if (mobileMenuActive) {
      addClass(document.body, 'body-overflow-hidden')
    } else removeClass(document.body, 'body-overflow-hidden')
  })

  const themeMenu = isDevelopMode()
    ? [
      {
        label: 'Theme',
        icon: 'pi pi-fw pi-eye',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-cog',
            command: () => (window.location = '/theme')
          },
          {
            label: 'Menu Modes',
            icon: 'pi pi-fw pi-cog',
            items: [
              {
                label: 'Static Menu',
                icon: 'pi pi-fw pi-bars',
                command: () => setLayoutMode('static')
              },
              {
                label: 'Overlay Menu',
                icon: 'pi pi-fw pi-bars',
                command: () => setLayoutMode('overlay')
              }
            ]
          },
          {
            label: 'Menu Colors',
            icon: 'pi pi-fw pi-align-left',
            items: [
              {
                label: 'Dark',
                icon: 'pi pi-fw pi-bars',
                command: () => setLayoutColorMode('dark')
              },
              {
                label: 'Light',
                icon: 'pi pi-fw pi-bars',
                command: () => setLayoutColorMode('light')
              }
            ]
          },
          {
            label: 'Components',
            icon: 'pi pi-fw pi-globe',
            badge: '9',
            items: [
              {
                label: 'Sample Page',
                icon: 'pi pi-fw pi-th-large',
                to: '/theme/sample'
              },
              {
                label: 'Forms',
                icon: 'pi pi-fw pi-file',
                to: '/theme/forms'
              },
              {
                label: 'Data',
                icon: 'pi pi-fw pi-table',
                to: '/theme/data'
              },
              {
                label: 'Panels',
                icon: 'pi pi-fw pi-list',
                to: '/theme/panels'
              },
              {
                label: 'Overlays',
                icon: 'pi pi-fw pi-clone',
                to: '/theme/overlays'
              },
              {
                label: 'Menus',
                icon: 'pi pi-fw pi-plus',
                to: '/theme/menus'
              },
              {
                label: 'Messages',
                icon: 'pi pi-fw pi-spinner',
                to: '/theme/messages'
              },
              {
                label: 'Charts',
                icon: 'pi pi-fw pi-chart-bar',
                to: '/theme/charts'
              },
              {
                label: 'Misc',
                icon: 'pi pi-fw pi-upload',
                to: '/theme/misc'
              }
            ]
          },
          {
            label: 'Template Pages',
            icon: 'pi pi-fw pi-file',
            items: [
              {
                label: 'Empty Page',
                icon: 'pi pi-fw pi-circle-off',
                to: '/'
              }
            ]
          },
          {
            label: 'Menu Hierarchy',
            icon: 'pi pi-fw pi-search',
            items: [
              {
                label: 'Submenu 1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  {
                    label: 'Submenu 1.1',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                      {
                        label: 'Submenu 1.1.1',
                        icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                        label: 'Submenu 1.1.2',
                        icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                        label: 'Submenu 1.1.3',
                        icon: 'pi pi-fw pi-bookmark'
                      }
                    ]
                  },
                  {
                    label: 'Submenu 1.2',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                      {
                        label: 'Submenu 1.2.1',
                        icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                        label: 'Submenu 1.2.2',
                        icon: 'pi pi-fw pi-bookmark'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Submenu 2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  {
                    label: 'Submenu 2.1',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                      {
                        label: 'Submenu 2.1.1',
                        icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                        label: 'Submenu 2.1.2',
                        icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                        label: 'Submenu 2.1.3',
                        icon: 'pi pi-fw pi-bookmark'
                      }
                    ]
                  },
                  {
                    label: 'Submenu 2.2',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                      {
                        label: 'Submenu 2.2.1',
                        icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                        label: 'Submenu 2.2.2',
                        icon: 'pi pi-fw pi-bookmark'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-question',
            command: () => history.push('/theme/documentation')
          },
          {
            label: 'View Source',
            icon: 'pi pi-fw pi-search',
            command: () => {
              window.location = 'https://github.com/primefaces/sigma'
            }
          }
        ]
      }
    ]
    : defaultThemeMenu

  const projectMenu = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => history.push('/')
    }
  ]

  const menu = [...themeMenu, ...projectMenu]

  let menuClick

  const onWrapperClick = () => {
    if (!menuClick) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }

    menuClick = false
  }

  const onToggleMenu = () => {
    menuClick = true

    if (window.innerWidth > 1024) {
      if (layoutMode === 'overlay') {
        setOverlayMenuActive(!overlayMenuActive)
      } else if (layoutMode === 'static') {
        setStaticMenuInactive(!staticMenuInactive)
      }
    } else {
      setMobileMenuActive(!mobileMenuActive)
    }
  }

  const onSidebarClick = () => {
    menuClick = true
    layoutMenuScroller.current.moveBar()
  }

  const onMenuItemClick = ({ item }) => {
    if (!item.items) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }
  }

  const logo =
    layoutColorMode === 'dark'
      ? '/assets/layout/images/logo-white.svg'
      : '/assets/layout/images/logo.svg'

  const wrapperClass = classNames('layout-wrapper', {
    'layout-overlay': layoutMode === 'overlay',
    'layout-static': layoutMode === 'static',
    'layout-static-sidebar-inactive':
      staticMenuInactive && layoutMode === 'static',
    'layout-overlay-sidebar-active':
      overlayMenuActive && layoutMode === 'overlay',
    'layout-mobile-sidebar-active': mobileMenuActive
  })
  const sidebarClassName = classNames('layout-sidebar', {
    'layout-sidebar-dark': layoutColorMode === 'dark'
  })

  return (
    <div className={wrapperClass} onClick={onWrapperClick}>
      <Topbar onToggleMenu={onToggleMenu} />

      <div className={sidebarClassName} onClick={onSidebarClick}>
        <ScrollPanel ref={layoutMenuScroller} style={{ height: '100%' }}>
          <div className='layout-sidebar-scroll-content'>
            <div className='layout-logo'>
              <img alt='Logo' src={logo} />
            </div>
            <Menu model={menu} onMenuItemClick={onMenuItemClick} />
          </div>
        </ScrollPanel>
      </div>

      <div className='layout-main'>{children}</div>

      <Footer />
      <div className='layout-mask' />
    </div>
  )
})
