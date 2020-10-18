import React from 'react'
import Modal from 'react-bootstrap/Modal'


function Newthread(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Thread
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form method='post' action='#' >
              <div className='form-group'>
                  <label for='title'>Title : </label>
                  <input type='text' className='form-control' placeholder='Enter Title' name='title' required />
              </div>
              <div className='form-group'>
                  <label for='description'>Description : </label>
                  <textarea  className='form-control' name='description' row='5'  required ></textarea>
              </div>
              <div className='float-right'>
                <button className='btn btn-secondary' onClick={props.onHide}> close </button> &nbsp;
                <button className='btn btn-primary' type='submit'> Post </button>
              </div>
          </form>
        </Modal.Body>
        
      </Modal>
    );
  }
  
export default Newthread; 