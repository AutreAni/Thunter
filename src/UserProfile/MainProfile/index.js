import React, { Fragment } from 'react';
import Background from './Background/index';
import ProfileDetails from './ProfileDetails/index';
import '../../css-modules/UserProfile/MainProfile/style.css';
import ProfileInfo from './ProfileInfo/index';

const MainProfile = ({ userData, showAudience, updatePicture, updateUserData }) => {


    return (
        <Fragment>
            {userData ?
                <div className="container">
                    <Background userData={userData}
                        updatePicture={updatePicture}
                    />
                    <div className="main__profile">
                        <ProfileDetails
                            userData={userData}
                            updatePicture={updatePicture}
                        />
                        <ProfileInfo
                            userData={userData}
                            showAudience = {showAudience}
                            updateUserData = {updateUserData}
                        />
                    </div>
                </div>
                : null}
        </Fragment>
    )
}

export default MainProfile;
