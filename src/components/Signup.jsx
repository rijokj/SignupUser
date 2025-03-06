import React, { useState } from 'react'
import "./Signup.css"


function Signup() {

 


  return (
    <div className="signup">
      <form action="">
        <div className="coat">
          <h1>Sign Up</h1>
          <div className="name">
            <label htmlFor="">Name</label>
            <input type="text"/>
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
