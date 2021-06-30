import React, { Fragment } from 'react';
import About from '../../About/index';
import Skills from '../../Skills/index';
import AudienceMain from '../../Audience/AudienceMain/index';
import '../../../css-modules/UserProfile/ProfileInfo/style.scss';
import ProfileSettings from '../../ProfileSettings/index';
import { useSelector } from 'react-redux';

const ProfileInfo = ({ userData }) => {
    const currentUserId = useSelector(state => state.currentUser.id);  

    return (
        <Fragment>
            { userData ?
                (<div className="profile__info">
                   <About userData = {userData}/>                  
                   <Skills userData = {userData} /> 
                   <AudienceMain userData = {userData} />
                  {userData.id === currentUserId?
                    <ProfileSettings userData = {userData}/> : null }
                </div>) : null }
        </Fragment>
    )
}

export default ProfileInfo
