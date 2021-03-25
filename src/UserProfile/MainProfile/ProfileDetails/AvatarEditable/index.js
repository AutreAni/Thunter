import React, {useState} from 'react';
import Avatar from '../../../Avatar/index';
import UploadImg from '../../UploadImg/index';
import AddPicture from '../../AddPicture/index';

const AvatarEditable = ({ userData, updatePicture}) => {
    const [uploadField, setUploadField] = useState();
    const [camera, setCamera] = useState(true);

    const createUplaodField = () => {
        setUploadField(true);
        setCamera(false);
    }

    const removeUploadField = () => {
        setUploadField(false);
    }

    const addCamera = () => {
        setCamera(true);
    }
    return (
        <div className="avatar__editable">
            <Avatar
                className="mainProfile"
                userData={userData}
                updatePicture={updatePicture}
            />
            {camera && userData.currentUser ? <AddPicture handleClick={createUplaodField} /> : null}
            {uploadField ?
                <UploadImg
                    updatePicture = {updatePicture}
                    fieldName = "picture"
                    userData={userData}
                    removeUploadField = {removeUploadField}
                    addCamera = {addCamera}
                /> : null}
          </div>
    )
}

export default AvatarEditable;
