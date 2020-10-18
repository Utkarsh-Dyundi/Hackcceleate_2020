import React from 'react';

function Nav(){
    return <div class="navindex">
    
    <div class="top">
  <nav class="navbar fixed navbar-dark  navbar-expand-lg ml-auto">
    <a class="navbar-brand" href="/">
    <span class="title">Logo</span>
    </a>
    <button class="navbar-toggler hambug" type="button" data-toggle="collapse" data-target="#abc" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="abc">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
  <a href="/signin"><button class="btn btn-success my-2 my-sm-0" type="submit">Sign In</button></a>
  </li>
    <li class="nav-item">
      <a class="nav-link " href="/signup">Sign up</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/discuss">Discussion</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="feedback.html" tabindex="-1" aria-disabled="true">Contact</a>
    </li>
  </ul>
</div>
</nav>

</div>
</div>

}
    
    
export default Nav;