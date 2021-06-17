import React from 'react';
import '../../css-modules/UserProfile/Username/style.scss';

const Username = ({goToMainProfile, username}) => {

    return (
        <span 
        className = "username"
        onClick = {goToMainProfile}
        >
        {username}
        </span>
    )
}

export default Username
