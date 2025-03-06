import React, { useState } from 'react'

import './Login.css'


function Login() {
  return (
    <div className="login">
      <form action="">
        <div className="container">
          <h1>Login</h1>
          <div className="name">
            <label htmlFor="">Name</label>
            <input type="text" />
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

export default Login
