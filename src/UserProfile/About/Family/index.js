import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ShortProfile from '../../ShortProfile';
import { useSelector } from 'react-redux';

const Family = () => {
    const [family, setFamily] = useState([]);
    const userToPreview = useSelector(state => state.userToPreview)
    const ids = userToPreview.about.family
    useEffect(() => {
        if(family.length) setFamily([]);
        ids.forEach(id => {
                fetch(`http://localhost:3000/users/${id}`)
                    .then(response => response.json())
                    .then(data => setFamily(family => [...family, data]))
            })
    },[userToPreview]);

    return (
        <div className = "details__fields">
        <FontAwesomeIcon
                    icon={ faHome }
                    className="icon"
                />
        <span>Family</span>
        {family.length?
        <ul>
           {family.map(member => {
            return (<li
            key={member.id}>
            <Link to='/profile'>
                <ShortProfile
                    userData={member}
                />
            </Link>
            </li>)
           })
           }
           </ul>
           :null
        }
        </div>
    )
}

export default Family;
