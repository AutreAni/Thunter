import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from '@fortawesome/free-solid-svg-icons';


const Languages = ({languages}) => {
    return (
        <div className = "details__fields">
            <span>
            <FontAwesomeIcon
                    icon={faLanguage}
                    className="icon"
                />
                Languages: {languages}
            </span>
        </div>
    )
}

export default Languages;
