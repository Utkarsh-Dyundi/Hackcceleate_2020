import React from 'react';
import Nav from "../nav";

function Contact(){
    return <div>
    <Nav />
    <br /><br /><br /><br />
        <div class="cobody">

<div class="row">
<div class="col-lg-8 center" >
  <div class="chead query">

  <h2 class="contact">Connect With Us.</h2>
  <p class="co">We will response to your queries feel free to contact us</p>
  <form class="" action="mailto:meetmeutkarsh@gmail.com" method="post" enctype="text/plain">
  <div class="form-group">
    <label for="Full name">Full Name</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" />
  </div>
  <div class="form-group">
    <label for="Full name">Contact Number</label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label for="Full name">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="Query">Your Query</label>
  <textarea name="name" rows="8" cols="80" class="form-control"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

</div>
<div class="col-lg-4 center">
<div class="chead">

<h1 class="contact">Contact Us</h1>
<br />
<p class="co">Mobile no: 9999999999</p>
<p class="co">Email: edufirst@gamil.com</p>
</div>
</div>
</div>

</div>

    </div>
}

export default Contact;