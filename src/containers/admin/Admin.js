import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel'
import classNames from 'classnames'

// Layout
import Topbar from './TopBar/Topbar'
import Menu from './Menu/Menu'
import Footer from './Footer'

// Components

const isDevelopMode = () => process.env.NODE_ENV === 'development'
const themeMenu = isDevelopMode()
  ? [
      {
        label: 'Tema SIGMA',
        icon: 'pi pi-fw pi-home',
        command: () =>
          window.open('https://www.primefaces.org/sigma-react/#/', '_blank')
      }
    ]
  : []
export const Admin = React.memo(props => {
  const [layoutMode] = useState('static')
  const [layoutColorMode] = useState('dark')
  const [staticMenuInactive, setStaticMenuInactive] = useState(false)
  const [overlayMenuActive, setOverlayMenuActive] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  const { history, children } = props

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

  const menu = [
    ...themeMenu,
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => history.push('/')
    }
  ]

  const menuClick = React.useRef(undefined)

  const onWrapperClick = () => {
    if (!menuClick.current) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }

    menuClick.current = false
  }

  const onToggleMenu = useCallback(() => {
    menuClick.current = true

    if (window.innerWidth > 1024) {
      if (layoutMode === 'overlay') {
        setOverlayMenuActive(!overlayMenuActive)
      } else if (layoutMode === 'static') {
        setStaticMenuInactive(!staticMenuInactive)
      }
    } else {
      setMobileMenuActive(!mobileMenuActive)
    }
  }, [layoutMode, overlayMenuActive, staticMenuInactive, mobileMenuActive])

  const onSidebarClick = () => {
    menuClick.current = true
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
