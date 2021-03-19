import React from 'react';
import Background from './Background/index';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/MainProfile/style.css';

const MainProfile = ({userData, updatePicture}) => {

    return (
        <div>
            {userData ?
                <div className = "container">
                <Background userData = {userData}
                updatePicture = {updatePicture}
                />
                <div className = "profile__wrapper">
                <Avatar className = "mainProfile"
                userData = {userData}
                updatePicture = {updatePicture}
                />
                <Username userData = {userData}/>
                </div>
                </div>
                : null}
        </div>
    )
}

export default MainProfile;
