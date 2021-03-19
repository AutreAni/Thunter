import React, { useState, useRef } from 'react';
import Axios from 'axios';
import Button from '../../../Button/index';
// import { Image } from 'cloudinary-react';

const UploadImg = (props) => {
    const [imageSelected, setImageSelected] = useState();
    const fileInput = useRef(null);

    const handleClick = (publicId) => {
        props.removeUploadField();
        const url = "https://res.cloudinary.com/dslaqvh3p/image/upload/v1616063700/" + publicId + ".png"
        fetch(`http://localhost:3000/users?username=${props.userData.username}`)
            .then(response => response.json())
            .then(data => {
                fetch(`http://localhost:3000/users/${data[0].id}`
                    , {
                        method: "PATCH",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({ backgroundImg: url })
                    })
                    .then(response => {
                        
                        console.log(response.status);
                        return response.json();
                        })
                    .then(data => console.log(data));
            
        });
}


const uploadImg = () => {
       const formData = new FormData();
       formData.append("file", imageSelected);
       formData.append("upload_preset", "siz3vvjh");

       Axios.post("https://api.cloudinary.com/v1_1/dslaqvh3p/image/upload", formData)
       .then(response => handleClick(response.data.public_id))
}
const handleInputChange = (e)=>{
    setImageSelected(e.target.files[0]);
}

const triggerInputChange = ()=>{
    fileInput.current.click();
}

return (
    <div 
    className = "uploadImg">
    <div className = "uploadImg__wrapper">
    <span className = "title">Upload a background photo</span>
    <div className = "buttons__wrapper">
        <input type="file" ref = {fileInput}
            onChange={handleInputChange}
        />
       <Button buttonName = "Upload photo" handleButtonClick = {triggerInputChange} />
        <Button
         buttonName = "Save"
         handleButtonClick={uploadImg}/>
        </div>
        </div>
    </div>
)
}

export default UploadImg;
