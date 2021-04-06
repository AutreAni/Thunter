import React, {useState, useEffect} from 'react';
import '../../../css-modules/UserProfile/Audience/AudiencePage/style.css';
import AudienceMain from '../AudienceMain/index';
import NetworkIndex from '../../../Network/index';


const AudiencePage = ({ userData, showUserProfile }) => { 
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
        setUsers([])
    }

    return (
        <div className="container">
            <div className="audience__main">
                <div className="existing__audience">
                   <AudienceMain
                    userData = {userData}
                    showUserProfile = {showUserProfile}
                    users = {users}
                    audienceList = {true}
                    emptyUserArray = {emptyUserArray}
                   />
                </div>
                <div className="under__preview">
                 <NetworkIndex />             
                </div>
            </div>
        </div>
    )
}

export default AudiencePage;
