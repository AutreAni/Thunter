import React, { useState, useEffect } from 'react';
import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import '../../../css-modules/UserProfile/Audience/AudiencePage/style.css';
import NetworkIndex from '../../../Network/index';
import MainProfile from '../../MainProfile/index';


const AudiencePage = ({ userData }) => {
    const [userToPreview, setUserToPreview] = useState();
    const [users, setUsers] = useState([]);
    const [audience, setAudience] = useState(userData.audience)
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
        setAudience(obj.audience)
    }



    return (
        <div className="container">
            <div className="audience__main">
                <div className="existing__audience">
                    <AudienceInfo
                        audience={userData.audience}
                        showAudience={() => { return }}
                    />
                    <AudienceList
                       users = {users}
                       showUserProfile={showUserProfile}
                    />
                </div>
                <div className="under__preview">
                    {!userToPreview ?
                        <NetworkIndex />
                        :
                        <MainProfile
                            userData={userToPreview}
                        />}
                </div>
            </div>
        </div>
    )
}

export default AudiencePage;
