import React, { useState, Fragment } from 'react';
import MainProfile from './MainProfile/index';
import HeaderProfile from './HeaderProfile/headerProfile';


const UserProfile = (props) => {
    const [fullProfile, setFullProfile] = useState();

    const handleFullProfileView = () => {
        setFullProfile(true);
    }
    const userData = props.userData;
    console.log(userData)
    return (
        <Fragment>
            <HeaderProfile
                userData={props.userData}
                setFullProfileView={handleFullProfileView}
            />
            {fullProfile ?
                <MainProfile
                    userData={userData}
                /> : null}
        </Fragment>
    )
}

export default UserProfile;
