import React from 'react';
import AvatarEditable from './AvatarEditable/index';
import Username from '../../Username/index';

const ProfileDetails = ({userData, updatePicture}) => {
    return (
        <div className = "profile__wrapper">
         <AvatarEditable 
                userData = {userData}
                updatePicture = {updatePicture}
                />
                <Username username = {userData.username}/>
            
        </div>
    )
}

export default ProfileDetails;
