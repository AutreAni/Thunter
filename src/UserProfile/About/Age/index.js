import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


const Age = ({ birthDate }) => {
    return (
        <div className="details__fields">
            <span>
                <FontAwesomeIcon
                    icon={faAddressCard}
                    className="icon"
                />
                Born on { birthDate }
            </span>
        </div>
    )
}

export default Age;