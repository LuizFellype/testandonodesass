import React from 'react'

// Prime components
import { Panel } from 'primereact/panel'
import { Button } from 'primereact/button'
import ActivityItem from './ActivityItem'

const Activity = () => {
  return (
    <div className='p-col-12 p-lg-4'>
      <Panel header='Activity' style={{ height: '100%' }}>
        <div className='activity-header'>
          <div className='p-grid'>
            <div className='p-col-6'>
              <span style={{ fontWeight: 'bold' }}>Last Activity</span>
              <p>Updated 1 minute ago</p>
            </div>
            <div className='p-col-6' style={{ textAlign: 'right' }}>
              <Button label='Refresh' icon='pi pi-refresh' />
            </div>
          </div>
        </div>

        <ul className='activity-list'>
          <ActivityItem count='$900' detail='Income' relevance='95%' />
          <ActivityItem count='$250' detail='Tax' relevance='24%' />
          <ActivityItem count='$125' detail='Invoices' relevance='55%' />
          <ActivityItem count='$250' detail='Expenses' relevance='15%' />
          <ActivityItem count='$350' detail='Bonus' relevance='5%' />
          <ActivityItem count='$500' detail='Revenue' relevance='25%' />
        </ul>
      </Panel>
    </div>
  )
}

export default Activity
