import React from 'react'
import Nav from "../nav";

function Thread () {

    const Reply = () => {
        return (

            <div className='container mt-3'>
                <div className='col-md-6 offset-md-3 p-3' style={{border:'1px solid #D3D3D3'}}>
                    <div className='col-12 mb-2' style={{borderBottom:'1px solid #D3D3D3'}}>
                        <p>Reply by: "Replier" &nbsp; .Time</p>
                        <p> Relpy by the replier get displayed here , only the Description part </p>
                    </div>
                    <div className='col-12'>
                        <button className='btn btn-light'><i className='fa fa-reply'> Reply</i></button>
                    </div>
                </div>
            </div>    

        )
    } 

    return (
        <div>
        <Nav />
        <br /><br /><br /><br />
        <div className='container mt-5'>
            <div className='col-md-6 offset-md-3 p-3' style={{border:'1px solid #D3D3D3'}}>
                <div className='col-12 mb-2' style={{borderBottom:'1px solid #D3D3D3'}}>
                    <h3>Asked Question </h3>
                    <p>Created by: Akhilesh &nbsp; .Time</p>
                    <p>Description of the question</p>
                </div>    
                <div className='col-12'>
                    <button className='btn btn-light'><i className='fa fa-reply'> Reply</i></button>{'  '}
                    <button className='btn btn-light'><i className='fa fa-comment'> Re-post</i></button>
                </div>
            </div>
        </div>
        <Reply />
        <Reply />
        <div className='container mt-5'>
            <div className='col-md-6 offset-md-3 p-3' style={{border:'1px solid #D3D3D3'}}>
                <div className='col-12 mb-1'>
                    <textarea className='form-control' row='5' name='reply' placeholder='Reply to Question' required></textarea>
                </div>
                <div className='col-12 d-flex align-items-center'>
                    <button className='btn btn-secondary'> Reply </button>
                </div>    
            </div>
        </div>    
        </div>   
    )

}

export default Thread;