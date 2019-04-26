import React from 'react'
import Card from './Card'

const CardSummary = () => (
  <>
    <Card
      title='Users'
      detail='Number of visitors'
      className='visitors'
      count='12'
    />
    <Card
      title='Sales'
      detail='Number of purchases'
      className='purchases'
      count='534'
    />
    <Card
      title='Revenue'
      detail='Income for today'
      className='revenue'
      count='$3,200'
    />
  </>
)

export default CardSummary
