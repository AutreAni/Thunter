import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const AddPicture = ({handleClick}) => {
  
    return (
        <div className = "camera__wrapper" onClick = {handleClick}>
           <FontAwesomeIcon icon = {faCamera}
           className = "camera"
            />
        </div>
    )
}

export default AddPicture
