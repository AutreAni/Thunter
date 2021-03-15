import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class ButtonGroup extends Component {
  state = {  }
  render() { 
    return ( 
<div  aria-label="Basic example" className="buttonDiv">
  <button type="button" className=" rounded-pill btn btn-primary mr-1">Done</button>
  <button type="button" className=" rounded-pill btn btn-secondary">Cancel</button>

</div>
     );
  }
}
 
export default ButtonGroup ;