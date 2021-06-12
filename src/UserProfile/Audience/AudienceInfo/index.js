import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../../../css-modules/UserProfile/Audience/AudienceInfo/style.css';
import { setActiveSubpage } from '../../../actions/features/activeSubpageSlicer';
import { useSelector, useDispatch } from 'react-redux';

const AudienceInfo = ({ audience }) => {
    const dispatch = useDispatch();
    const activePage = useSelector(state => state.userToPreview.activeSubpage);

    const setActivePage = () =>  activePage === "AUDIENCE"?
                                dispatch(setActiveSubpage("")):
                                dispatch(setActiveSubpage("AUDIENCE"));

    return (
            <div className="audience__info" onClick = {setActivePage}>
                <FontAwesomeIcon icon={faUserFriends} className="icon audience__icon" />
                <span className="audience__qt">Audience {audience?.length}</span>
            </div>
    )
}

export default AudienceInfo;
