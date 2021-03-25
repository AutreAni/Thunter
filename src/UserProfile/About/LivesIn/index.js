import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const LivesIn = ({livesIn}) => {
    return (
        <div className = "lives__in">
            <FontAwesomeIcon 
            icon = {faMapMarkerAlt}
            className = "location__icon icon"
            />
            <span>Lives in {livesIn}</span>
        </div>
    )
}

export default LivesIn;
