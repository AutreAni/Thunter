import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const OtherSkills = ({otherSkills}) => {
    return (
        <div className = "details__fields">
        <span>
        <FontAwesomeIcon
                    icon={ faCommentDots }
                    className="icon"
                />
            Other: {otherSkills}
        </span>
    </div>
    )
}

export default OtherSkills;
