import React from 'react';
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import SigninTeacher from "./pages/signinTeacher";
import SigninStudent from "./pages/signinStudent";
import SigninParent from "./pages/signinParent";
import ProfileStudent from "./pages/profileStudent";
import Signupstudent from "./pages/signupStudent";
import Signupteacher from "./pages/signupTeacher";
import Teacherpage from "./pages/profileTeacher";
import Footer from "./footer";
import Discuss from "./pages/dicuss";
import Thread from "./pages/thread";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App(){
   return <div><Router>
       
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signinTeacher" component={SigninTeacher} />
          <Route path="/signinStudent" component={SigninStudent} />
          <Route path="/signinParent" component={SigninParent} />
          <Route path="/profileStudent" component={ProfileStudent} />
          <Route path="/signupStudent" component={Signupstudent} />
          <Route path="/signupTeacher" component={Signupteacher} />
          <Route path="/profileTeacher" component={Teacherpage} />
          <Route path="/discuss" component={Discuss} />
          <Route path="/thread" component={Thread} />
        </Switch>
        <br /><br />
        <Footer />
    </Router>
    </div>
}
export default App;