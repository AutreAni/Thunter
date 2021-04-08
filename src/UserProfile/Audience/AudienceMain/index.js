import React, { useState, useEffect } from 'react';
import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import "../../../css-modules/UserProfile/Audience/AudienceMain/style.css";

const AudienceMain = ({ userData, showUserProfile, audienceList, pageToPreview}) => {
    const [users, setUsers] = useState([]);
    let requestUrl = userData.password ?
        `http://localhost:3000/users/` :
        `http://localhost:3000/fbUsers/`;

    useEffect(() => {
           const audience = userData.audience;
           (audience.forEach(user => {
                fetch(`${requestUrl}${user}`)
                    .then(response => response.json())
                    .then(data => setUsers(users => [...users, data]))
            }))
            return() => { setUsers([]) }
    },[userData]);

    return (
        <div className="details">
            <span className="details__title">
                <AudienceInfo
                    audience={userData.audience}
                    pageToPreview = { pageToPreview }
                    />
            </span>
            {audienceList ? <div className="wrapper">
                <AudienceList
                        users={users}
                        showUserProfile={ showUserProfile }
                        pageToPreview = { pageToPreview }
                        />
             </div>: null }                
        </div>
    )
}

export default AudienceMain;
