import React from 'react';
import '../../css-modules/UserProfile/Username/style.css';

const Username = ({userData, goToMainProfile}) => {
    return (
        <span 
        className = "username"
        onClick = {goToMainProfile}
        >
        {userData.username}
        </span>
    )
}

export default Username
