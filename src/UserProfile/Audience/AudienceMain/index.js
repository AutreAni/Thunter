import React, { useState, useEffect } from 'react';
import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import '../../../css-modules/UserProfile/Audience/AudienceMain/style.css';
import NetworkIndex from '../../../Network/index';
import MainProfile from '../../MainProfile/index';


const AudienceMain = ({ userData, goToAudiencePage }) => {
    const [users, setUsers] = useState([]);
    const [userToPreview, setUserToPreview] = useState()

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

    const showUserProfile = (e, obj) => {
        setUserToPreview(obj);
        userData = obj;
    }



    return (
        <div className="container">
            <div className="audience__main">
                <div className="existing__audience">
                    <AudienceInfo
                        audience={audience}
                    />
                    <AudienceList
                        users={users}
                        showUserProfile = {showUserProfile}
                    />
                </div>
                {!userToPreview?
                 <NetworkIndex />
                  :
                   <MainProfile 
                   userData = {userToPreview}
                   goToAudiencePage = {goToAudiencePage}
                  />}
            </div>
        </div>
    )
}

export default AudienceMain;
