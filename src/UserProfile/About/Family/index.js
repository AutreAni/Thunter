import React, {useState, useEffect} from 'react';
import AudienceList from "../../Audience/AudienceList/index";

const Family = ({ids}) => {
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

    return (
        <div>
        <span>Family {ids?.length}</span>
        <AudienceList users = {family}/>
        </div>
    )
}

export default Family;
