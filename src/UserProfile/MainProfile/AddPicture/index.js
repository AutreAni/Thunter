import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { propTypes } from 'react-bootstrap/esm/Image';

const AddPicture = (props) => {
  
    return (
        <div className = "camera__wrapper" onClick = {props.handleClick}>
           <FontAwesomeIcon icon = {faCamera}
           className = "camera"
            />
        </div>
    )
}

export default AddPicture
