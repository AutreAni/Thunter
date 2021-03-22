import React from 'react';
import Background from './Background/index';
// import Avatar from '../Avatar/index';
// import Username from '../Username/index';
import ProfileDetails from './ProfileDetails/index';
import '../../css-modules/UserProfile/MainProfile/style.css';

const MainProfile = ({userData, updatePicture}) => {

    return (
        <div>
            {userData ?
                <div className = "container">
                <Background userData = {userData}
                updatePicture = {updatePicture}
                />
                <div className = "main__profile">
                <ProfileDetails
                userData = {userData}
                updatePicture = {updatePicture}
                />
                </div>
                </div>
                : null}
        </div>
    )
}

export default MainProfile;
