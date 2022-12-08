import React from "react";
import "./login.css"

function Login(){
  return <div className="login">

  <h1>Welcome to KSP!</h1>

  <div className="login-option">
  <button type="submit"><a href="/SignUp/">SignUp</a></button>
  <br/>
  <br/>
  <button type="submit"><a href="/signin">SignIn</a></button>
  </div>
  </div>
}

export default Login;