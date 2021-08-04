//  This is where i necessities
import React from 'react'

// This is where i import Components & API calls
import style from './BU-Nav.scss'

// This is where i call create the component
const BU_Nav = () => {

  return (
    <div className='nav'>
      <span className="logo"><img src='https://fontmeme.com/permalink/210804/17aeb834f75b545a5a0d0fd3d4e8b6c1.png' alt="WebFlix Logo" /></span>
      <a href="/">Sign In</a>
    </div>
  )
}

// This is where i export the component
export default BU_Nav
