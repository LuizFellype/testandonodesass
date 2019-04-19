import React from 'react'
import { Panel } from 'primereact/panel'

const CustomPanel = () => (
  <div className='card card-w-title'>
    <h1>Panel</h1>
    <Panel header='Godfather I' toggleable>
      The story begins as Don Vito Corleone, the head of a New York Mafia
      family, oversees his daughter-s wedding. His beloved son Michael has just
      come home from the war, but does not intend to become part of his father-s
      business. Through Michael-s life the nature of the family business becomes
      clear. The business of the family is just like the head of the family,
      kind and benevolent to those who give respect, but given to ruthless
      violence whenever anything stands against the good of the family.
    </Panel>
  </div>
)

export default CustomPanel
