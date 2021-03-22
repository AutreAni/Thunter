import React from 'react';
import Avatar from '../../../Avatar/index';

const AvatarEditable = ({userData, updatePicture}) => {
    return (
        <div className = "avatar__editable">
           <Avatar
                className = "mainProfile"
                userData = {userData}
                updatePicture = {updatePicture} 
           /> 
        </div>
    )
}

export default AvatarEditable;
