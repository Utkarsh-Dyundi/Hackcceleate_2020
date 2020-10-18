import React from 'react';
import Nav from "../nav";

function Teacherpage () {

    const PostVideo = () => {

        return (
                
            <div className='col-md-5 mt-2 mb-3 p-4' style={{border:'1px solid #d3d3d3'}}>
                        <div className='card text-left'>
                            <div className='card-header bg-primary'>
                                <h4 className='text-white'> Post Video </h4>
                            </div>
                            <div className='card-body'>

                                <form  action="#" method="POST">
                                <div class="form-group">
                                        <input type="text" class=" form-control"  placeholder="Title"  name="title" required />
                                    </div>
                                    <div class="form-group">
                                        <textarea className='form-control' type="text" row='3' placeholder="Description" name="description" required /> 
                                    </div>
                                    <div class="custom-file mb-2">
                                        <input type="file" class="custom-file-input" name="customFile" />
                                        <label class="custom-file-label" for="customFile">Upload Video</label>
                                    </div> 
                    
                                    <button type="submit" class="btn btn-primary"> POST </button> &nbsp;
                                    <button type="reset" class="btn btn-primary"> RESET </button>
                                </form>

                            </div>

                        </div>
                    </div>        

        )
    }

    const PostAssignment = () => {

        return (
                    <div className='col-md-5 offset-md-2 mt-2 mb-3 p-2' style={{border:'1px solid #d3d3d3'}}>
                        <div className='card text-left'>
                            <div className='card-header bg-primary'>
                                <h4 className='text-white'> Post Assignment </h4>
                            </div>
                            <div className='card-body'>

                                <form  action="#" method="POST">
                                <div class="form-group">
                                        <input type="text" class=" form-control"  placeholder="Title"  name="title" required />
                                    </div>
                                    <div class="form-group row">
                                        <h5 className=' col-sm-3 ml-auto mr-1'>Due:</h5>
                                        <input type='date' class="col-sm-4 mr-auto form-control" placeholder="Due Date" name="due-date"  required />
                                        <input type='time' class="col-sm-3 mr-auto form-control" placeholder="Due Time" name="due-time"  required />
                                    </div>
                                    <div class="form-group">
                                        <textarea className='form-control' type="text" row='3' placeholder="Description" name="description" required /> 
                                    </div>
                                    <div class="custom-file mb-2">
                                        <input type="file" class="custom-file-input" name="customFile" />
                                        <label class="custom-file-label" for="customFile">Upload Assignment</label>
                                    </div> 
                    
                                    <button type="submit" class="btn btn-primary"> POST </button> &nbsp;
                                    <button type="reset" class="btn btn-primary"> RESET </button>
                                </form>

                            </div>

                        </div>
                    </div> 
                )                   
    }

    return (
        <div >
        <Nav />
        <br /><br /><br /><br />
        <div>
            <div className='container mt-5 mb-5 p-2' style={{border:'1px solid #d3d3d3'}}>
                <div className='col-md-12 row'>
                    <div className='col-md-3 p-1' style={{border:'1px solid #d3d3d3'}}>
                        <img className='img-fluid' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt='profile image' />
                    </div>
                    <div className='col-md-9'>
                        <div className='col-12 p-3' style={{borderBottom:'1px solid #d3d3d3'}}>
                            <h1>Teacher Name </h1>
                            <p><i className='fa fa-book'></i> Qualification &nbsp; <i className='fa fa-map-marker'></i> Institute Name</p> 
                        </div>
                        <div className='col-12 row'>
                            <div className='col-3 mt-4'>
                                <h1>50</h1>
                                <p> Current Batch </p>
                            </div>
                            <div className='col-3 mt-4'>
                                <h1>5</h1>
                                <p> Subjects</p>
                            </div>
                            <div className='col-3 mt-4'>
                                <h1>15</h1>
                                <p> Assignment</p>
                            </div>
                            <div className='col-3 mt-4'>
                                <h1>1000</h1>
                                <p> Total Students</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container'>
                <div className='row'>

                <PostVideo />
                <PostAssignment />                    
                    
                </div>
            </div>

</div>
        </div>      
        
    )
}

export default Teacherpage;