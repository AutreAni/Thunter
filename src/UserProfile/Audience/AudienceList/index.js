import React, { Fragment } from 'react';
import ShortProfile from '../../ShortProfile/index';
import '../../../css-modules/UserProfile/Audience/AudienceList/style.css';
import { Link } from 'react-router-dom';

const AudienceList = ({ users, showUserProfile }) => {
 
      const usersList = users.length ? (users.map(user => {
        return <li
            key={user.id}>
            <Link to='/profile'>
                <ShortProfile
                    userData={user}
                    showUserProfile = {showUserProfile} />
            </Link>
        </li>
    })) : null;

    return (
        <Fragment>
            { users.length ?
                (<div
                    className="audience__list">
                    <ul>
                        {usersList}
                    </ul>
                </div>) : null}
        </Fragment>
    )
}

export default AudienceList;
