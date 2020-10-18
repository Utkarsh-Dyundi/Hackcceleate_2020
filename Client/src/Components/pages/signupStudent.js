import React from 'react'
import { Link } from 'react-router-dom'
import Nav from "../nav";

function Signupstudent () {
    return (<div>
         <Nav />
         <br /><br /><br /><br /><br></br>
         <div class="logincard">
    <span className="signintitle"><h2>Student Signup</h2></span>
    <br /><br />
        <div className='card text-left'>
           
            <div className='card-body'>
            <span class="logo"><h3>Pedagogy</h3></span>
 <br />
                <form  action="#" method="POST">
                    <div class="form-group row">
                        <input class="col-sm-5 ml-auto form-control" placeholder="First Name" name="firstname"  required />
                        <input class="col-sm-5 mr-auto offset-sm-1  form-control" placeholder="Last Name" name="lastname"  required />
                    </div>
                    <div class="form-group">
                        <input type="email" class=" form-control"  placeholder="Email"  name="e-mail" required />
                    </div>
                    <div class="form-group">
                        <input type="password" class=" form-control" placeholder="Password" name="password" required /> 
                    </div>
                    <div class="form-group">
                        <input type="password" class=" form-control" placeholder="Re-type Password" name="re-password" required /> 
                    </div>
    
                    <button type="submit" class="btn btn-primary"> SUBMIT </button> &nbsp;
                    <button type="reset" class="btn btn-primary"> RESET </button>
                </form>

            </div>
            <div className='card-footer bg-light'>
                <p className='mb-auto'>Already Registered! <Link to='#'>Login Now</Link></p>
                <p>Signup as Teacher <Link to='/signupTeacher'>Signup Now</Link></p>
            </div>
        </div> 

        </div>
        </div>

    )
}

export default Signupstudent;