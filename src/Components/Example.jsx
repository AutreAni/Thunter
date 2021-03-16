

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='exampleDiv'>
      <Button variant="secondary" onClick={handleShow}>
       Notes/photos
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create event</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>Write here. Add images or a video for visual impact!</Modal.Body>
        <input className=" btn btn-secondary" type="file"></input>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// render(<Example />);

export default Example;