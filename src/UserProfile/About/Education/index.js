import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUniversity } from '@fortawesome/free-solid-svg-icons';


const Education = ({ education }) => {
    return (
        <div className="details__fields">
            <span>
                <FontAwesomeIcon
                    icon={faUniversity}
                    className="icon"
                />
                Studied {education}
            </span>
        </div>
    )
}

export default Education;
