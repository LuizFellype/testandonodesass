import React from 'react'

// Custom components
import PrimeTable from '../../components/data-demo/PrimeTable'
import DataView from '../../components/data-demo/DataView'
import PickList from '../../components/data-demo/Pick'
import OrderList from '../../components/data-demo/OrderList'
import PrimeTree from '../../components/data-demo/tree/Tree'
import FlowChart from '../../components/data-demo/FlowChart'
import TreeDataTable from '../../components/data-demo/TreeDataTable'
import Calendar from '../../components/data-demo/Calendar'

const DataDemo = () => (
  <div className='p-grid'>
    <div className='p-col-12'>
      <PrimeTable />
    </div>

    <div className='p-col-12'>
      <DataView />
    </div>

    <div className='p-col-12 p-md-8'>
      <PickList />
    </div>

    <div className='p-col-12 p-md-4'>
      <OrderList />
    </div>

    <div className='p-col-12'>
      <PrimeTree />
    </div>

    <div className='p-col-12'>
      <FlowChart />
    </div>

    <div className='p-col-12'>
      <TreeDataTable />
    </div>

    <div className='p-col-12'>
      <Calendar />
    </div>
  </div>
)

export default DataDemo
