import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SubMenu = ({ onMenuItemClick, items, root, className }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const _onMenuItemClick = (event, item, index) => {
    // avoid processing disabled items
    if (item.disabled) {
      event.preventDefault()
      return true
    }

    // execute command
    if (item.command) {
      item.command({ originalEvent: event, item: item })
    }

    if (index === activeIndex) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }

    if (onMenuItemClick) {
      onMenuItemClick({
        originalEvent: event,
        item: item
      })
    }
  }

  const renderLinkContent = ({ items, badge, icon, label }) => {
    const subMenuIcon = items && (
      <i className='pi pi-fw pi-angle-down menuitem-toggle-icon' />
    )
    const badgeItem = badge && <span className='menuitem-badge'>{badge}</span>

    return (
      <>
        <i className={icon} />
        <span>{label}</span>
        {subMenuIcon}
        {badgeItem}
      </>
    )
  }

  const renderLink = (item, i) => {
    const content = renderLinkContent(item)

    if (item.to) {
      return (
        <NavLink
          activeClassName='active-route'
          to={item.to}
          onClick={e => _onMenuItemClick(e, item, i)}
          exact
          target={item.target}
        >
          {content}
        </NavLink>
      )
    } else {
      return (
        <a
          href={item.url}
          onClick={e => _onMenuItemClick(e, item, i)}
          target={item.target}
        >
          {content}
        </a>
      )
    }
  }

  const subMenuItems =
    items &&
    items.map((item, i) => {
      const active = activeIndex === i
      const styleClass = classNames(item.badgeStyleClass, {
        'active-menuitem': active && !item.to
      })

      return (
        <li className={styleClass} key={i}>
          {item.items && root === true && <div className='arrow' />}
          {renderLink(item, i)}
          <SubMenu items={item.items} onMenuItemClick={onMenuItemClick} />
        </li>
      )
    })

  return subMenuItems ? <ul className={className}>{subMenuItems}</ul> : null
}

SubMenu.defaultProps = {
  className: null,
  items: null,
  onMenuItemClick: null,
  root: false
}

SubMenu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  onMenuItemClick: PropTypes.func,
  root: PropTypes.bool
}

export default SubMenu
