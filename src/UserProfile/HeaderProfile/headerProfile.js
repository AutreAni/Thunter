import React, { Fragment } from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/header.css';

const HeaderProfile = (props) => {
    const goToProfile = () => {
        props.setFullProfileView(true);
    }
    const userData = props.userData;
    return (
        <Fragment>
            { userData ? <div className = "headerProfile" onClick = {goToProfile}>
                    <Avatar className = "header__avatar"
                    userData = {userData}/>
                    <Username userData = {userData}/>
            </div> : null}
        </Fragment>
    )
}

export default HeaderProfile;
