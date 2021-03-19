import React, { useState } from 'react';
import AddPicture from '../AddPicture/index'
import UploadImg from '../UploadImg/index';

const Background = (props) => {
    const [uploadField, setUploadField] = useState();
    const createUplaodField = () => {
        console.log("Clicked")
        setUploadField(true)
    }

    const removeUploadField = () =>{
        setUploadField(false);
    }

    return (
        <div className="background">
            {props.userData?.backgroundImg ? <img className="bg__img" alt="bg" src={props.userData.backgroundImg} /> : null}
            <AddPicture handleClick={createUplaodField} />
            {uploadField ?
                <UploadImg
                    userData={props.userData}
                    removeUploadField = {removeUploadField}
                /> : null}
        </div>
    )
}

export default Background;