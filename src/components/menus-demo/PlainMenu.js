import React, { useRef } from 'react'
import { items } from '../../constants'

// Prime components
import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button'

const PlainMenu = () => {
  const menu = useRef(null)

  return (
    <div className='card card-w-title'>
      <h1>Plain Menu</h1>
      <Menu model={items} />
      <Menu model={items} ref={menu} popup style={{ width: 250 }} />
      <Button
        icon='pi pi-external-link'
        label='Show'
        onClick={event => menu.current.toggle(event)}
        style={{ marginTop: '20px', width: 'auto' }}
      />
    </div>
  )
}

export default PlainMenu
