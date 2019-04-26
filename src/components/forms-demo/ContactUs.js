import React, { useState } from 'react'
import { cities } from '../../constants'

// Prime components
import { Panel } from 'primereact/panel'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const ContactUs = () => {
  const [city, setCity] = useState(null)

  const onCityChange = ({ value }) => setCity(value)

  return (
    <div className='p-fluid contact-form'>
      <Panel header='Contact Us'>
        <div className='p-grid'>
          <div className='p-col-12'>
            <Dropdown
              value={city}
              options={cities}
              placeholder='Select a City'
              onChange={onCityChange}
              autoWidth={false}
            />
          </div>
          <div className='p-col-12'>
            <InputText type='text' placeholder='Name' />
          </div>
          <div className='p-col-12'>
            <InputText type='text' placeholder='Age' />
          </div>
          <div className='p-col-12'>
            <InputText type='text' placeholder='Message' />
          </div>
          <div className='p-col-12'>
            <Button type='button' label='Send' icon='fa-send' />
          </div>
        </div>
      </Panel>
    </div>
  )
}

export default ContactUs
