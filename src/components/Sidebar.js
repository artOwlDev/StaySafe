
import { GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'

import "./sidebar.scss"


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="icons">
          <a href="https://www.linkedin.com/in/artun-selcuk-bb782019a/" target="_blank"><LinkedIn className='icon link'/></a>
          <a href="https://github.com/artOwlDev" target="_blank"><GitHub className='icon git'/></a>
          <div className="vl"></div>
        </div>
    </div>
  )
}

export default Sidebar