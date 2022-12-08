import React from "react";
import "./SignIn.css"

function SignIn(){
  return <div className="SignIn">

<h3>Log In to your account!</h3>
    <form method="post" action="/signin" class="mb-2">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Enter Your Username" Required></input>
        </div>
        <div class="form-group">
            <label for="pass1">Password</label>
            <input type="password" class="form-control" id="pass1" name="pass1" placeholder="Enter Your Password" Required></input>
        </div>

        <button type="submit" class="btn btn-primary">Log In</button>
    </form>
  </div>
}

export default SignIn;