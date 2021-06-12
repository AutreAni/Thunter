import React from 'react';
import placeholderImg from '../../Images/profile-placeholder.png';
import '../../css-modules/UserProfile/Avatar/avatar.css';


const Avatar = ({className, avatar }) => {
    return (
            <img className = {className + " avatar"}
            src = {avatar || placeholderImg }   
            alt="placeholder"></img>
    )
}

export default Avatar
