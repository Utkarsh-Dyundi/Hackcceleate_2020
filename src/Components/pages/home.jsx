import React from 'react';
import Nav from "../nav";
import Top from "../top";
import Mid from "../mid";
import Features from "../features";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Home(){
    return(
        <Router>
     <div>
      <div class="div1">
        <Nav />
        <Top />
        </div>
        <br /><br /><br />
        <Mid />
        <br /><br /><br />
        <Features />
      </div>
      </Router>
      )
}

export default Home;