import React from 'react'

// Custom components
import BreadCrumb from '../../components/menus-demo/BreadCrumb'
import Steps from '../../components/menus-demo/Steps'
import MenuBar from '../../components/menus-demo/MenuBar'
import PlainMenu from '../../components/menus-demo/PlainMenu'
import TieredMenu from '../../components/menus-demo/TieredMenu'
import RightClickMenu from '../../components/menus-demo/RightClickMenu'
import SlideMenu from '../../components/menus-demo/SlideMenu'
import PanelMenu from '../../components/menus-demo/PanelMenu'
import MegaMenu from '../../components/menus-demo/MegaMenu/MegaMenu'
import TabMenu from '../../components/menus-demo/TabMenu'

const MenusDemo = () => (
  <div className='p-grid p-fluid'>
    <div className='p-col-12'>
      <BreadCrumb />
      <Steps />
      <MenuBar />
    </div>

    <div className='p-col-12 p-lg-6'>
      <PlainMenu />
      <TieredMenu />
    </div>

    <div className='p-col-12 p-lg-6'>
      <RightClickMenu />
      <SlideMenu />
      <PanelMenu />
    </div>

    <div className='p-col-12 p-col-6'>
      <MegaMenu />
    </div>

    <div className='p-col-12 p-col-6'>
      <TabMenu />
    </div>
  </div>
)

export default MenusDemo
