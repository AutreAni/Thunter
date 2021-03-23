import React, { Fragment } from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/ShortProfile/style.css';

const ShortProfile = (props) => {
   
    const userData = props.userData;
    return (
        <Fragment>
            { userData ? <div className = "shortProfile"
             onClick = {props.goToMainProfile}
             >
                    <Avatar className = "short__avatar"
                    userData = {userData}/>
                    <Username userData = {userData}/>
            </div> : null}
        </Fragment>
    )
}

export default ShortProfile;
