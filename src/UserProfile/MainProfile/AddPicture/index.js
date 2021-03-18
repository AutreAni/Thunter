import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const AddPicture = () => {
    const uploadPic = () =>{
        console.log("uploadpicClicked")
    }
    return (
        <div className = "camera__wrapper">
           <FontAwesomeIcon icon = {faCamera} 
           className = "camera"
           onClick = {uploadPic}
            />
        </div>
    )
}

export default AddPicture
