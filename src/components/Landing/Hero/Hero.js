//  This is where i necessities
import React from 'react'

// This is where i import Components & API calls
import style from './Hero.scss'
import BU_Nav from './../../Shared/BU-Nav/BU-Nav'
import GS_Email from './../../Shared/GS-Email/GS-Email'

// This is where i call create the component
const Hero = () => {

  return (
    <div className="hero">
      <BU_Nav/>
      <div className="hero-words">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <p>Watch anywhere. Cancel anytime.</p>
      </div>
      <GS_Email/>
    </div>
  )
}

// This is where i export the component
export default Hero
