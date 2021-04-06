import React from 'react';
import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import "../../../css-modules/UserProfile/Audience/AudienceMain/style.css";

const AudienceMain = ({ userData, users, showUserProfile, audienceList, pageToPreview, emptyUserArray }) => {

    return (
        <div className="details">
            <span className="details__title">
                <AudienceInfo
                    audience={userData.audience}
                    pageToPreview = { pageToPreview }
                    />
            </span>
            {audienceList ? <div className="wrapper">
                <AudienceList
                        users={users}
                        showUserProfile={showUserProfile}
                        emptyUserArray = {emptyUserArray}
                         />
             </div>: null }
                
        </div>
    )
}

export default AudienceMain;
