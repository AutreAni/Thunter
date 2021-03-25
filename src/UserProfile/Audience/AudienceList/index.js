import React, {Fragment} from 'react';
import ShortProfile from '../../ShortProfile/index';
import '../../../css-modules/UserProfile/Audience/AudienceList/style.css'

const AudienceList = ({users, showUserProfile}) => {

     let usersList = users.length ?( users.map( user => {
        return <li 
        key = {user.id}
        onClick = {(e) =>showUserProfile(e, user)}
        >
        <ShortProfile
        userData = {user}/>
        </li>
    })) :null;

    return (
        <Fragment>
        { users.length ? 
        (<div
        className = "audience__list">
        <ul>
            {usersList}
        </ul>
        </div>): null}            
        </Fragment>
    )
}

export default AudienceList;
