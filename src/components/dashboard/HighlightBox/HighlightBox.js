import React from 'react'
import Details from './Details'

const HighlightBox = () => (
  <>
    <Details
      backgroundColor='#007be5'
      color='#00448f'
      title='TV'
      icon='search'
      detail='Total Queries'
      count='523'
    />
    <Details
      backgroundColor='#ef6262'
      color='#a83d3b'
      title='TI'
      icon='question-circle'
      detail='Total Issues'
      count='81'
    />
    <Details
      backgroundColor='#20d077'
      color='#038d4a'
      title='OI'
      icon='filter'
      detail='Open Issues'
      count='21'
    />
    <Details
      backgroundColor='#f9c851'
      color='#b58c2b'
      title='CI'
      icon='check'
      detail='Closed Issues'
      count='60'
    />
  </>
)

export default HighlightBox
