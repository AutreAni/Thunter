import React, { Fragment, useState } from 'react';
import About from '../../About/index';
import Skills from '../../Skills/index';
import AudienceMain from '../../Audience/AudienceMain/index';
import '../../../css-modules/UserProfile/ProfileInfo/style.css';
import ProfileSettings from '../../ProfileSettings/index';

const ProfileInfo = ({ userData, showUserProfile, updateUserData }) => {
    const [previewPage, setPreviewPage] = useState({});
    const pageToPreview = (pageName) => {
        setPreviewPage(previewPage => ({ 
            [pageName]: !previewPage[pageName] 
        }));
    }

    return (
        <Fragment>
            { userData ?
                (<div className="profile__info">
                <AudienceMain
                        userData = {userData}
                        audience={userData.audience}
                        audiencePage={previewPage?.audiencePage}
                        pageToPreview={pageToPreview}
                        password = {userData.password}
                        showUserProfile = {showUserProfile}
                    />
                    <About
                        about = {userData.about}
                        aboutPage={previewPage?.aboutPage}
                        pageToPreview={pageToPreview}
                    />                  
                    <Skills
                        skills={userData.skills}
                        skillsPage={previewPage?.skillsPage}
                        pageToPreview={pageToPreview}
                    /> 
                    {userData.currentUser?
                    (<ProfileSettings
                        pageToPreview={pageToPreview}
                        settingsPage={previewPage?.settingsPage}
                        userData = {userData}
                        updateUserData = {updateUserData}
                    />):null }
                </div>) : null}
        </Fragment>
    )
}

export default ProfileInfo
