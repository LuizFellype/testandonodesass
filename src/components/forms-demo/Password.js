import React from 'react'

// Prime Password component
import { Password } from 'primereact/password'

const CustomPassword = () => (
  <div className='card card-w-title'>
    <h1>Password</h1>
    <Password placeholder='******' />
  </div>
)

export default CustomPassword
