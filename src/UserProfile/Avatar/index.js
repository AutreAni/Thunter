import React from 'react';
import placeholderImg from './profile-placeholder.png';
import '../../css-modules/UserProfile/Avatar/avatar.css';

const Avatar = (props) => {
    return (
            <img className = {props.className + " avatar"}
            src = {(props.userData.picture
                         ? props.userData.picture : 
                            placeholderImg                      
                        )}
                        alt="placeholder"></img>
    )
}

export default Avatar
