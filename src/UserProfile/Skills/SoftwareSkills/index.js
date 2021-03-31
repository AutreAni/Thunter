import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const SoftwareSkills = ({softwareSkills}) => {
    return (
        <div className = "details__fields">
             <span>
             <FontAwesomeIcon
                    icon={faLaptopCode}
                    className="icon"
                />
            Software skills: {softwareSkills}
        </span>
        </div>
    )
}

export default SoftwareSkills
