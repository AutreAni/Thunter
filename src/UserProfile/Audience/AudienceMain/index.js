import React, { useState, useEffect } from 'react';
import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import "../../../css-modules/UserProfile/Audience/AudienceMain/style.css";
import { useSelector } from 'react-redux';

const AudienceMain = () => {
    const activePage = useSelector(state => state.userToPreview.activeSubpage);
    const audience = useSelector(state => state.userToPreview.audience);
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
        <div 
         className = {`details ${activePage ==="AUDIENCE" ? "active-subpage" : ""}`}             
        >
            <span className = "details__title">
                <AudienceInfo
                    audience = { audience }
                    />
            </span>
            {users.length && activePage === "AUDIENCE"? <div className="wrapper">
                <AudienceList
                        users = { users }
                 />
             </div>: null }                
        </div>
    )
}

export default AudienceMain;
