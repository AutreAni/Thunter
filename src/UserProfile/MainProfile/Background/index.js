import React, { useState } from 'react';
import AddPicture from '../AddPicture/index'
import UploadImg from '../UploadImg/index';
import {useSelector } from 'react-redux';

const Background = ({userData}) => {
    const currentUserId = useSelector(state => state.currentUser.id)
    const [uploadField, setUploadField] = useState();
    const [camera, setCamera] = useState(true);

    const createUplaodField = () => {
        setUploadField(true);
        setCamera(false);
    }

    const removeUploadField = () =>{
        setUploadField(false);
    }

    const addCamera = () => {
        setCamera(true);
    }

 
    return (
        <div className="background">
            {userData.backgroundImg ? <img className="bg__img" alt="bg" src={userData.backgroundImg} /> : null}
            {camera && userData.id === currentUserId ? <AddPicture handleClick={createUplaodField} /> : null} 
            {uploadField ?
                <UploadImg
                    // updatePicture = {updatePicture}
                    fieldName = "backgroundImg"
                    userData={userData}
                    removeUploadField = {removeUploadField}
                    addCamera = {addCamera}
                /> : null}
        </div>
    )
}

export default Background;