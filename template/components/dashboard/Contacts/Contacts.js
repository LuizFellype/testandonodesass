import React from 'react'
import Contact from './Contact'

// Prime Panel component
import { Panel } from 'primereact/panel'

const Contacts = () => (
  <div className='p-col-12 p-md-6 contacts'>
    <Panel header='Contacts'>
      <ul>
        <Contact
          imgName='avatar_1.png'
          alt='avatar1'
          name='Claire Williams'
          email='clare@pf-sigma.com'
        />
        <Contact
          imgName='avatar_2.png'
          alt='avatar2'
          name='Jason Dourne'
          email='jason@pf-sigma.com'
        />
        <Contact
          imgName='avatar_3.png'
          alt='avatar3'
          name='Jane Davidson'
          email='jane@pf-sigma.com'
        />
        <Contact
          imgName='avatar_4.png'
          alt='avatar4'
          name='Tony Corleone'
          email='tony@pf-sigma.com'
        />
      </ul>
    </Panel>
  </div>
)

export default Contacts
