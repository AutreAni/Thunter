import React, { useState, useRef } from 'react';
import Axios from 'axios';
import Button from '../../../Button/index';
import '../../../css-modules/UserProfile/UploadImg/style.scss';
import { updateCurrentUser } from '../../../actions/currentUser';
import { useDispatch } from 'react-redux';

const UploadImg = ({ userData, fieldName, removeUploadField, addCamera }) => {
    const [imageSelected, setImageSelected] = useState();
    const [fileExtention, setFileExtention] = useState();
    const [uploadButtonName, setUploadButtonName] = useState('Upload photo');
    const [wrongExtention, setWrongExtention] = useState(false);
    const fileInput = useRef(null);
    const dispatch = useDispatch();

    const handleClick = (publicId) => {
        const url = `https://res.cloudinary.com/dslaqvh3p/image/upload/${publicId}.${fileExtention}`;
        const requestUserUrl = !userData.password ? `http://localhost:3000/fbUsers/` :
            `http://localhost:3000/users/`;


        fetch(`${requestUserUrl}${userData.id}`
            , {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ [fieldName]: url })
            })
            .then(response => response.json())
            .then(data => {
                addCamera();
                removeUploadField();
                dispatch(updateCurrentUser({[fieldName]: url}))

            })
            .catch(error => console.log(error))

    }


    const uploadImg = () => {
        if (wrongExtention) return;
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "siz3vvjh");

        Axios.post("https://api.cloudinary.com/v1_1/dslaqvh3p/image/upload", formData)
            .then(response => handleClick(response.data.public_id))
            .catch(error => console.log(error));
    }
    const handleInputChange = (e) => {
        setImageSelected(e.target.files[0]);
        setUploadButtonName('Uploaded');
        const extention = e.target.files[0].name.split('.')[1];
        if (!extention.match(/(jpg|jpeg|png)$/)) {
            setWrongExtention(true);
            return;
        }
        setWrongExtention(false);
        setFileExtention(extention);
    }

    const triggerInputChange = () => {
        fileInput.current.click();
    }

    const handleRemoveClick = () => {
        removeUploadField();
        addCamera();
    }

    return (
        <div
            className="uploadImg">
            <div
                className="uploadImg__wrapper">
                <span
                    className="closeBtn"
                    onClick={handleRemoveClick}>
                    x
                 </span>
                <div
                    className="buttons__wrapper">
                    <input
                        type="file"
                        ref={fileInput}
                        onChange={handleInputChange}
                    />
                    <Button
                        buttonName={uploadButtonName}
                        handleButtonClick={triggerInputChange} />
                    <Button
                        buttonName="Save"
                        handleButtonClick={uploadImg} />
                    {wrongExtention ?
                        (<span
                            className="wrong__ext">
                            *Please, select a photo
                        </span>
                        ) : null}
                </div>
            </div>
        </div>
    )
}

export default UploadImg;
