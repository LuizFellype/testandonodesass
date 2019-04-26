import React from 'react'

// Custom components
import CardSummary from '../components/dashboard/CardSummary/CardSummary'
import HighlightBox from '../components/dashboard/HighlightBox/HighlightBox'
import Tasks from '../components/dashboard/Tasks/Tasks'
import Contacts from '../components/dashboard/Contacts/Contacts'
import PrimeChart from '../components/dashboard/Chart'
import Calendar from '../components/dashboard/Calendar'
import Activity from '../components/dashboard/Activity/Activity'

const Dashboard = () => (
  <div className='p-grid p-fluid dashboard'>
    <CardSummary />
    <HighlightBox />
    <Tasks />
    <Contacts />
    <PrimeChart />
    <Calendar />
    <Activity />
  </div>
)

export default Dashboard
