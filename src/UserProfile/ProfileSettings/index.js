import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog} from '@fortawesome/free-solid-svg-icons';
import Form from './Form/index';
import '../../css-modules/UserProfile/ProfileSettings/stye.css'

const ProfileSettings = ({userData, settingsPage, pageToPreview, updateUserData}) => {
  const handleClick = (e) => {
    pageToPreview("settingsPage");
}
    return (
        <div className = "details">
          <span className = "details__title"
          onClick = {handleClick}>
             <FontAwesomeIcon
             icon = {faCog}
             className = "icon"/>
             Settings
          </span>  
          { settingsPage ?
                (<div className="wrapper settings__wrapper">
                <Form 
                userData = {userData}
                updateUserData = {updateUserData}
                pageToPreview = {pageToPreview}
                />
                </div>
                ) : null}
        </div>
    )
}

export default ProfileSettings
