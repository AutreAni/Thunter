import React, { useState } from 'react';
import placeholderImg from './profile-placeholder.png';
import MainProfile from './MainProfile/index';
import HeaderProfile from './headerProfile';


const UserProfile = (props) => {
    const [fullProfile, setFullProfile] = useState();

    const handleFullProfileView = () => {
        setFullProfile(true);
    }
    const userData = props.userData;
    console.log(userData)
    return (
        <div>
            <HeaderProfile
                userData={props.userData}
                setFullProfileView={handleFullProfileView}
            />
            {fullProfile ?
                <MainProfile
                    userData={userData}
                /> : null}
        </div>
    )
}

export default UserProfile;
