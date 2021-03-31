import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog} from '@fortawesome/free-solid-svg-icons';

const ProfileSettings = ({userData}) => {
    return (
        <div className = "details">
          <span className = "details__title">
             <FontAwesomeIcon
             icon = {faCog}
             className = "icon"/>
             Settings
          </span>  
        </div>
    )
}

export default ProfileSettings
