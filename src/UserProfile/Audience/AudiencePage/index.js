import { useState, useEffect } from 'react';
import '../../../css-modules/UserProfile/Audience/AudiencePage/style.css';
import AudienceList from '../AudienceList/index';
import NetworkIndex from '../../../Network/index';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';


const AudiencePage = () => {
    const audience = useSelector(state => state.currentUser.audience);
    const [users, setUsers] = useState([]);
    let requestUrl = `http://localhost:3000/users/`;

    useEffect(() => {
           (audience.forEach(user => {
                fetch(`${requestUrl}${user}`)
                    .then(response => response.json())
                    .then(data => setUsers(users => [...users, data]))
            }))
            return() => { setUsers([]) }
    },[audience]);

    return (
        <div className="wrapper">
            <div className="audience__main">
                <div className="existing__audience">
                    <div className="audience__info">
                        <FontAwesomeIcon icon={faUserFriends} className="icon audience__icon" />
                        <span className="audience__qt">Audience {audience?.length}</span>
                    </div>
                    <AudienceList users={ users } />
                </div>
                <div className="under__preview">
                    <NetworkIndex />
                </div>
            </div>
        </div>
    )
}

export default AudiencePage;
