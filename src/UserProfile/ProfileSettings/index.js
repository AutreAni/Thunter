import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog} from '@fortawesome/free-solid-svg-icons';
import Form from './Form/index';
import '../../css-modules/UserProfile/ProfileSettings/stye.scss'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const ProfileSettings = ( {userData} ) => {
    const pathName = useLocation().pathname;

    return (
        <div
         className = {`details ${ pathName ==="/profile/settings" ? "active-subpage" : ""}`}>
         <Link to = '/profile/settings'>
         <span className = "details__title">
             <FontAwesomeIcon
             icon = {faCog}
             className = "icon"/>
             Settings
          </span>  
         </Link>
         
          { pathName === "/profile/settings" ?
                (<div className="wrapper settings__wrapper">
                <Form userData = { userData }/>
                </div>
                ) : null}
        </div>
    )
}

export default ProfileSettings
