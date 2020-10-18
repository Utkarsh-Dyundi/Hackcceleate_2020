import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (

        <footer className='text-left footer' style={{ backgroundColor: "#4fc3f7" }}>

            <div className='container text-white pt-4 mb-4'>
                <div className='row mb-4'>
                    <div className='col-sm-12 col-lg-2'>
                        <h2>Brand Logo</h2>
                    </div>
                    <div className='col-sm-12 col-lg-10 '>
                        <p>Coding Website is founded in 2020 with a mission to create skilled Software Engineers for our country and the world. We are here to bridge the gap between the quality of skills demanded by industry and the quality of skills imparted by conventional institutes. we strive to increase student interest by providing hands on practical training on every concept taught in the classroom</p>
                    </div>
                </div>
            </div>

            {/* <div className='container pt-4 mb-4 text-dark'>
                <div className='row mb-4'>
                    <div className='col-sm-6 col-lg-3'>
                        <h4 style={{ Tex: "#4fc3f7" }}>Beginner Courses</h4>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <h4 style={{ Color: "#4fc3f7" }}>Intermediate Courses</h4>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <h4 style={{ Color: "#4fc3f7" }}>Master Courses</h4>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <h4 style={{ Color: "#4fc3f7" }}>Development Courses</h4>
                    </div>
                </div>
            </div> */}

            <div className='container mb-4'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-3'>
                    <h4 style={{ Tex: "#4fc3f7" }}>Primary</h4>
                    <br />
                        <Link style={{color:'white'}} to="#"><h5>Lower kindergarten</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Upper kindergarten</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Class 1st to 5th</h5></Link>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                    <h4 style={{ Tex: "#4fc3f7" }}>Middle/secondary</h4>
                    <br />
                        <Link style={{color:'white'}} to="#"><h5>Class 5th-6th</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Class 7th-8th</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Class 9th-10th</h5></Link>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                    <h4 style={{ Tex: "#4fc3f7" }}>Senior secondary</h4>
                    <br />
                        <Link style={{color:'white'}} to="#"><h5>Science</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Commerce</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Arts</h5></Link>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                    <h4 style={{ Tex: "#4fc3f7" }}>Connect with us</h4>
                    <br />
                        <Link style={{color:'white'}} to="#"><h5>Facebook</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Instagram</h5></Link>
                        <Link style={{color:'white'}} to="#"><h5>Twitter</h5></Link>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-2">
                <center className='pb-2'>
                    <Link to='#' className='btn btn-social-icon btn-google'><i className='fa fa-google-plus'></i></Link>&nbsp;
                    <Link to='#' className='btn btn-social-icon btn-facebook'><i className='fa fa-facebook'></i></Link>&nbsp;
                    <Link to='#' className='btn btn-social-icon btn-twitter'><i className='fa fa-twitter'></i></Link>&nbsp;
                    <Link to='#' className='btn btn-social-icon btn-instagram'><i className='fa fa-instagram'></i></Link>&nbsp;
                    <Link to='#' className='btn btn-social-icon'><i className='fa fa-envelope-o fa-lg'></i></Link>&nbsp;
                </center>

                <center className='pb-1'>
                    <p>Copyright &copy; Coding Website. All Rights Reserved | Contact Us: <i className='fa fa-phone'></i> +91 9000000000</p>
                </center>
            </div>
        </footer>

    );
}

export default Footer;