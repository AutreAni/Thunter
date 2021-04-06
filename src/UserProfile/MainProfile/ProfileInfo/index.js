import React, { Fragment, useState, useEffect } from 'react';
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
    const [users, setUsers] = useState([]);

    const audience = userData.audience;
    let requestUrl = userData.password ?
        `http://localhost:3000/users/` :
        `http://localhost:3000/fbUsers/`;


    useEffect(() => {
        if (!users.length) {
            (audience.forEach(user => {
                fetch(`${requestUrl}${user}`)
                    .then(response => response.json())
                    .then(data => setUsers(users => [...users, data]))
            }))
        }
    })

    const emptyUserArray = () => {
        setUsers([]);
    }

    return (
        <Fragment>
            { userData ?
                (<div className="profile__info">
                <AudienceMain
                        userData = {userData}
                        pageToPreview={pageToPreview}
                        showUserProfile = {showUserProfile}
                        audienceList = {previewPage?.audiencePage}
                        users = {users}
                        emptyUserArray = {emptyUserArray}
                    />
                    <About
                        about = {userData.about}
                        aboutPage={previewPage?.aboutPage}
                        pageToPreview={pageToPreview}
                        showUserProfile = {showUserProfile}
                        emptyUserArray = {emptyUserArray}
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
