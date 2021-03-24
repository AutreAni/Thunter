import React, { useState, useEffect } from 'react';
import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import '../../../css-modules/UserProfile/Audience/AudienceMain/style.css';
import NetworkIndex from '../../../Network/index';


const AudienceMain = ({ userData }) => {
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



    return (
        <div className="container">
            <div className="audience__main">
                <div className="existing__audience">
                    <AudienceInfo
                        audience={audience}
                    />
                    <AudienceList
                        users={users}
                    />
                </div>
                <NetworkIndex />
            </div>
        </div>
    )
}

export default AudienceMain;
