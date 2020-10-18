import React from 'react';
import Nav from "../nav";

function SigninStudent(){
    return <div>
    <Nav />
    <br /><br /><br /><br /><br />
    
    <div class="logincard">
    <span className="signintitle"><h2>Student Login</h2></span>
    <br /><br />
    <div class="card">
 <div class="card-body">
<span class="logo"><h3>Logo</h3></span>
 <br />
 <form action="/signinStudent" method="post">
  <div class="form-group">
    <label  for="exampleInputEmail1">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="passwprd" type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
  </div>
</div>
    </div>
    </div>
}

export default SigninStudent;