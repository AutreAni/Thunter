import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog} from '@fortawesome/free-solid-svg-icons';
import Form from './Form/index';
import '../../css-modules/UserProfile/ProfileSettings/stye.css'
import { setActiveSubpage } from '../../actions/features/activeSubpageSlicer';
import { useSelector, useDispatch } from 'react-redux';

const ProfileSettings = () => {
    const activePage = useSelector(state => state.userToPreview.activeSubpage);
     const dispatch = useDispatch();

    const setActivePage = () => activePage ==="SETTINGS"? 
                            dispatch(setActiveSubpage("")):
                            dispatch(setActiveSubpage("SETTINGS"));
    return (
        <div
         className = {`details ${activePage ==="SETTINGS" ? "active-subpage" : ""}`}>
          <span className = "details__title"
          onClick = {setActivePage}>
             <FontAwesomeIcon
             icon = {faCog}
             className = "icon"/>
             Settings
          </span>  
          { activePage === "SETTINGS" ?
                (<div className="wrapper settings__wrapper">
                <Form />
                </div>
                ) : null}
        </div>
    )
}

export default ProfileSettings
