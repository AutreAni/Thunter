import React from 'react';
import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import "../../../css-modules/UserProfile/Audience/AudienceMain/style.css";

const AudienceMain = ({ audience, audiencePage, pageToPreview, password, showUserProfile }) => {
    const handleClick = (e) => {
        pageToPreview("audiencePage");
    }


    return (
        <div className="details">
            <span className="details__title">
                <AudienceInfo
                    audience={audience}
                    showAudience={handleClick} />
            </span>
                {audiencePage ?
                    <AudienceList
                        audience={audience}
                        password={password}
                        showUserProfile={showUserProfile}
                    /> : null}

        </div>
    )
}

export default AudienceMain;
