import React from 'react'
import { breadcrumbItems, home } from '../../utils/constants/menusDemo'

// Prime BreadCrumb component
import { BreadCrumb } from 'primereact/breadcrumb'

const CustomBreadCrumb = () => (
  <div className='card card-w-title'>
    <h1>Breadcrumb</h1>
    <BreadCrumb model={breadcrumbItems} home={home} />
  </div>
)

export default CustomBreadCrumb
