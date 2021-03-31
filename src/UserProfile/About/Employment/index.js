import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';

const Employment = ({employment}) => {
    return (
        <div className = "details__fields">
        <FontAwesomeIcon 
        icon = {faBriefcase} 
        className = "icon"
        />
          <span>Works as {employment}</span>  
        </div>
    )
}

export default Employment;
