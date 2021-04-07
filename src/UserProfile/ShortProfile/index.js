import React, { Fragment } from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/ShortProfile/style.css';

const ShortProfile = ({ userData, showUserProfile, pageToPreview }) => {
   
    const handleClick = (e, obj) => {
        showUserProfile( obj );
        pageToPreview(null);
    }
    
    return (
        <Fragment>
            { userData ? <div className = "shortProfile"
              onClick={(e) => handleClick(e, userData)}>
                    <Avatar className = "short__avatar"
                    userData = {userData}/>
                    <Username userData = {userData}/>
            </div> : null}
        </Fragment>
    )
}

export default ShortProfile;
