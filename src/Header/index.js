import React from 'react';
import SearchField from './SearchField/index';
import ShortProfile from '../UserProfile/ShortProfile/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSignOutAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../css-modules/Header/style.css';
import { Link } from 'react-router-dom';

const Header = ({ userData, performSignOut, showUserProfile }) => {
    const handleSignOut = () => {
        performSignOut();
    }
    return (
        <div
            className="container">
            <div
                className="header">
                <SearchField />
                <Link to="/">
                    <span
                        className="nav-li">
                        <FontAwesomeIcon
                            icon={faHome}
                            className="icon"
                        /> Home
                    </span>
                </Link>
                <Link to="/jobs">
                    <span
                        className="nav-li jobs">
                        <FontAwesomeIcon
                            icon={faBriefcase}
                            className="icon"
                        /> Jobs
                    </span>
                </Link>
                <Link to="/profile">
                    <span
                        className="nav-li">
                        <ShortProfile
                            userData={userData}
                            showUserProfile = {showUserProfile}
                            emptyUserArray = {()=>null}
                            pageToPreview = {()=>null}
                        />
                    </span>
                </Link>
                <span
                    className="nav-li signOut"
                    onClick={handleSignOut}>
                    <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="icon" />
                      Sign Out
                </span>
            </div>
        </div>
    )
}

export default Header;
