import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Newthread from './newthread'
import Nav from "../nav";

function Discuss () {

    const [modalShow, setModalShow] = React.useState(false);

    const Sidebar = () => {
        return (
        
            <div className='col-md-12'>
                <table className='table table-hover table-bordered'>
                    <div className='container'>
                    <thead className='mb-2' style={{borderBottom:'1px solid #d3d3d3'}}>
                        <h3>Subjects</h3>
                    </thead>
                    <tbody>
                        <tr><Link to='#'><h5> Computer Related </h5></Link></tr>
                        <tr><Link to='#'><h5> Maths </h5></Link></tr>
                        <tr><Link to='#'><h5> Chemistry </h5></Link></tr>
                        <tr><Link to='#'><h5> Physics </h5></Link></tr>
                        <tr><Link to='#'><h5> Biology </h5></Link></tr>
                    </tbody>
                    </div>    
                </table>
            </div>
        

        )

    }


    const Block = () => {
        return (
            <div onClick={()=> window.open("/thread","_blank")}>
                <div className='container'>
                    <div className='row mt-2 mb-2' style={{borderBottom:'1px solid #D3D3D3'}}>
                        <div className='col-md-8'>
                            <div className='col-12 mb-2'>
                                <h4> Asked Question </h4>
                            </div>    
                            <div className='col-12 mb-1'>
                                <p>created by : Akhilesh  &emsp;  .Time</p>
                            </div>    
                        </div>        
                        <div className='col-md-4 d-flex align-items-center justify-content-center'>
                            <p>views &emsp; replies</p>
                        </div>
                    </div>
                </div>
            </div>    
        )
        
    }

    return(
        <div>
        <Nav /><br /><br /><br />
        <br /><br />
        <div className='container-fluid'>
            <div className=' d-flex justify-content-center text-dark'>
            <br /><br />
                <h1><b> Discussion Forum </b></h1>
            </div>
            <br /><br />
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar />
                </div>
                <div className='col-md-8 offset-md-1' style={{border:'1px solid #D3D3D3', padding:'20px'}}>
                    <div style={{borderBottom:'1px solid #D3D3D3'}} >
                        <div className='row mb-4 justify-content-lg-center'>
                            <div class="input-group col-md-7 mr-2">
                                <input class="form-control rounded-2 py-2" type="search" placeholder="Search" />
                                <button type='submit' className='btn'><i className='fa fa-search'></i></button>
                            </div>    
                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                    New Thread
                                </Button>
  
                                <Newthread show={modalShow} onHide={() => setModalShow(false)}/>
                        </div>  
                    </div>    
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                </div>
            </div>    
        </div>  
        </div>         

    )
}

export default Discuss;