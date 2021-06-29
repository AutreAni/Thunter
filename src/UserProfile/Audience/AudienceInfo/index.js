import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../../../css-modules/UserProfile/Audience/AudienceInfo/style.scss';
import { setActiveSubpage } from '../../../actions/activeSubpage';
import { useDispatch } from 'react-redux';

const AudienceInfo = ({ audience }) => {
    const dispatch = useDispatch();

    const setActivePage = () => dispatch(setActiveSubpage("AUDIENCE"));

    return (
            <div className="audience__info" onClick = {setActivePage}>
                <FontAwesomeIcon icon={faUserFriends} className="icon audience__icon" />
                <span className="audience__qt">Audience {audience?.length}</span>
            </div>
    )
}

export default AudienceInfo;
