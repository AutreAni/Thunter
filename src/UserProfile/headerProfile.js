import React from 'react';
import placeholderImg from './profile-placeholder.png';

const HeaderProfile = (props) => {
    const goToProfile = () => {
        props.setFullProfileView(true);
    }
    const userData = props.userData;
    console.log(userData)
    return (
        <div>
            { userData ? <div onClick = {goToProfile}>
                <span className="avatar">
                    <img style = {{width:"20px", height:"20px"}} src = {(userData.picture
                         ? userData.picture : 
                            placeholderImg                      
                        )}
                        alt="placeholder"></img>
                </span>
                <span
                    className="username">
                    {userData.username}
                </span>
            </div> : null}
        </div>
    )
}

export default HeaderProfile;
