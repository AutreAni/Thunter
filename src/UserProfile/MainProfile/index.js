import React, { Fragment , useState} from 'react';
import Background from './Background/index';
import ProfileDetails from './ProfileDetails/index';
import '../../css-modules/UserProfile/MainProfile/style.css';
import ProfileInfo from './ProfileInfo/index';

const MainProfile = ({ userData, showAudience, updatePicture }) => {
    // const [userToPreview, setUserToPreview] = useState(userData);

    const showUserProfile = (e, obj) => {
        // setUserToPreview(obj);
    }
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
                            showUserProfile = {showUserProfile}
                        />
                    </div>
                </div>
                : null}
        </Fragment>
    )
}

export default MainProfile;
