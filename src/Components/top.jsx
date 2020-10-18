import React from 'react';
import pic1 from "../images/title.png";
function Top(){
    return <div>
        <div class="row main">
<div class="col-lg-6 center">
  <p class="explore">Our catch phrase and moto here probably of two lines.....</p>
   <a class="soci" href="/signin"><button type="button" class="soc btn btn-success btn-lg button">Login</button></a>
    <a class="soci" href="/signup"><button type="button" class="soc btn btn-dark btn-lg button">Sign Up</button></a>
</div>
<div class="col-lg-6 center">
  <img class="pisa" src={pic1} alt=""></img>
</div>
    </div>
    </div>
}
export default Top;