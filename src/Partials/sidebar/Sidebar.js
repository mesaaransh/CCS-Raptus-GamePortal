import React from 'react'
import './sidebar.css'

import { UilPlay } from '@iconscout/react-unicons'
import { UilTrophy } from '@iconscout/react-unicons'
import { UilBook } from '@iconscout/react-unicons'

export default function Sidebar() {


  return (
    <div className="sidebar">
        <span className='my-4 navitem'><UilBook size='50' color = "#1F4047" weight="10"/></span>
        <span className='my-4 navitem'><UilPlay size='50' color = "#fff"/></span>
        <span className='my-4 navitem'><UilTrophy size='50' color = "#1F4047"/></span>
    </div>
  )

  
}
