import React, {useState, useEffect} from 'react';
import AudienceList from "../../Audience/AudienceList/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Family = ({ids, showUserProfile, pageToPreview, emptyUserArray}) => {
    const [family, setFamily] = useState([]);
    useEffect(() => {
        if (!family.length) {
            (ids.forEach(id => {
                fetch(`http://localhost:3000/users/${id}`)
                    .then(response => response.json())
                    .then(data => setFamily(family => [...family, data]))
            }))
        }
    })

    const handleClick = () => {
        pageToPreview(null);
    }

    return (
        <div className = "details__fields"
        onClick = {handleClick}>
        <FontAwesomeIcon
                    icon={ faHome }
                    className="icon"
                />
        <span>Family</span>
        <AudienceList users = {family}
         showUserProfile = {showUserProfile}
         emptyUserArray = {emptyUserArray}
        />
        </div>
    )
}

export default Family;
