import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../../../css-modules/UserProfile/Audience/AudienceInfo/style.css';

const AudienceInfo = ({ audience, pageToPreview }) => {
    
    const handleClick = (e) => {
        pageToPreview("audiencePage");
    }

    return (
            <div className="audience__info" onClick = {handleClick}>
                <FontAwesomeIcon icon={faUserFriends} className="icon audience__icon" />
                <span className="audience__qt">Audience {audience?.length}</span>
            </div>
    )
}

export default AudienceInfo;
