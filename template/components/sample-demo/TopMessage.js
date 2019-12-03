import React from 'react'

const TopMessage = () => (
  <div
    className='p-messages p-component p-messages-success'
    style={{ margin: '0 0 1em 0', display: 'block' }}
  >
    <div className='p-messages-wrapper'>
      <span className='p-messages-icon pi pi-fw pi-2x pi-check' />
      <ul>
        <li>
          <span className='p-messages-detail'>
            Designer API is a theme engine for the complete PrimeReact UI Suite
            and includes this demo application to test the commonly used
            components while designing your theme.
          </span>
        </li>
      </ul>
    </div>
  </div>
)

export default TopMessage
