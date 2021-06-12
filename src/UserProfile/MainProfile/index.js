import React, { Fragment } from 'react';
import Background from './Background/index';
import ProfileDetails from './ProfileDetails/index';
import '../../css-modules/UserProfile/MainProfile/style.css';
import ProfileInfo from './ProfileInfo/index';

const MainProfile = ({ userData, updatePicture, updateUserData, showUserProfile, users }) => {

    return (
        <Fragment>
            {userData ?
                <div className="wrapper">
                    <Background userData={userData}
                        // updatePicture={updatePicture}
                    />
                    <div className="main__profile">
                        <ProfileDetails
                            userData={userData}
                            updatePicture={updatePicture}
                        />
                        <ProfileInfo
                            userData={userData}
                            updateUserData = {updateUserData}
                            showUserProfile = {showUserProfile}
                            users = {users}
                        />
                    </div>
                </div>
                : null}
        </Fragment>
    )
}

export default MainProfile;
