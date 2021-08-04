//  This is where i necessities
import React from 'react'

// This is where i import Components & API calls

// This is where i call create the component
const GS_Email = () => {

  return (
    <div>
      <p>Ready to watch? enter your email to create or restart your membership</p>

      <form>
        <input
        type='email'
        placeholder='Email address' />
        <button>Get Started</button>
      </form>
    </div>
  )
}

// This is where i export the component
export default GS_Email
