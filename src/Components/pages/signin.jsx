import React from 'react';
import Nav from "../nav";

function Signin(){
    return <div>
    <Nav />
    <br /><br /><br /><br />
    <br /><br />
    <div class="signin">
    <h1>Login</h1>
    <div class="row main">
<div class="col-lg-4">
<h2> For Teachers</h2>
<br />
<p class="signinop">We help teachers organize there work and make giving task and interacting with 
students so that they can put there all efforts in teaching.</p>
<br />
<a class="soci" href="/signinTeacher"><button type="button" class="soc btn btn-success btn-lg button">Login</button></a>
<br /><br />
<p>Don't have an account</p><a href="/signup">signup</a>
</div>

<div class="col-lg-4 ">
<h2>For Students</h2>
<br />
<p class="signinop">Make study fun and easy learn from your very own teachers and 
from many others for your all your favourite subjects.</p>
<br />
<a class="soci" href="/signinStudent"><button type="button" class="soc btn btn-dark btn-lg button">Login</button></a>
<br /><br />
<p>Don't have an account</p><a href="/signup">signup</a>
</div>

<div class="col-lg-4">
<h2> For Parents</h2>
<br />
<p class="signinop">Join us as parent and track your child's progress and keep
yourself updated with your child's assingment and tests.</p>
<br />
<a class="soci" href="/signinParent"><button type="button" class="soc btn btn-primary btn-lg button">Login</button></a>
<br /><br />
<p>Don't have an account</p><a href="/signup">signup</a>
</div>

</div>
</div>
</div>

}

export default Signin;