import React from 'react';
import Nav from "../nav";

function Signup(){
    return <div>
    <Nav />
    <br /><br /><br /><br />
    <br /><br />
    <div class="signin">
    <h1>Join us</h1>
    <div class="row main">
<div class="col-lg-4">
<h2> For Teachers</h2>
<br />
<p class="signinop">We help teachers organize there work and make giving task and interacting with 
students so that they can put there all efforts in teaching.</p>
<br />
<a class="soci" href="/signupTeacher"><button type="button" class="soc btn btn-success btn-lg button">Signup</button></a>
<br /><br />
<p>Already have an account</p><a href="/signin">Signin</a>
</div>

<div class="col-lg-4 ">
<h2>For Students</h2>
<br />
<p class="signinop">Make study fun and easy learn from your very own teachers and 
from many others for your all your favourite subjects.</p>
<br />
<a class="soci" href="/signupStudent"><button type="button" class="soc btn btn-dark btn-lg button">Signup</button></a>
<br /><br />
<p>Already have an account</p><a href="/signin">Signin</a>
</div>

<div class="col-lg-4">
<h2> For Parents</h2>
<br />
<p class="signinop">Join us as parent and track your child's progress and keep
yourself updated with your child's assingment and tests.</p>
<br />
<a class="soci" href="/signupParent"><button type="button" class="soc btn btn-primary btn-lg button">Signup</button></a>
<br /><br />
<p>Already have an account</p><a href="/signin">Signin</a>
</div>

</div>
</div>
</div>

}

export default Signup;