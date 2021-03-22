import React from 'react';
import Background from './Background/index';
import ProfileDetails from './ProfileDetails/index'
import '../../css-modules/MainProfile/style.css';

const MainProfile = ({userData, updatePicture}) => {

    return (
        <div>
            {userData ?
                <div className = "container">
                <Background userData = {userData}
                updatePicture = {updatePicture}
                />
                <ProfileDetails  userData = {userData}
                updatePicture = {updatePicture}/>
                </div>
                : null}
        </div>
    )
}

export default MainProfile;
