import React from 'react';
import SearchField from './SearchField/index';
import ShortProfile from '../UserProfile/ShortProfile/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../css-modules/Header/style.css';

const Header = (props) => {
    const handleSignOut = () => {
        props.performSignOut();
    }
    return (
        <div
         className = "container">
        <div 
        className = "header">
            <SearchField/>
            <span 
            className = "nav-li home"
            onClick = {props.goToHomePage}
            >
            <FontAwesomeIcon 
            icon = {faHome}
            className = "icon"
            />
            Home
            </span>
            <span 
            className = "nav-li home">
            <ShortProfile 
            userData = {props.userData}
            goToMainProfile = {props.goToMainProfile}
            />
            </span>
            <span 
            className = "nav-li signOut" 
            onClick = {handleSignOut}
            >
            <FontAwesomeIcon 
            icon = {faSignOutAlt}
            className = "icon"/>
            Sign Out
            </span>
        </div>
        </div>
    )
}

export default Header;
