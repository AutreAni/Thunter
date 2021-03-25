import React, {Fragment} from 'react';
import Background from './Background/index';
// import Avatar from '../Avatar/index';
// import Username from '../Username/index';
import ProfileDetails from './ProfileDetails/index';
import '../../css-modules/UserProfile/MainProfile/style.css';
import AudienceInfo from '../Audience/AudienceInfo/index';

const MainProfile = ({userData, goToAudiencePage, updatePicture}) => {

    return (
        <Fragment>
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
                <AudienceInfo
                 audience = {userData.audience}
                 goToAudiencePage = {goToAudiencePage}
                 />
                </div>
                : null}
        </Fragment>
    )
}

export default MainProfile;
