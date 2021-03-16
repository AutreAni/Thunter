import React from 'react';
import SearchField from './SearchField/index';
import HeaderProfile from '../UserProfile/HeaderProfile/headerProfile';
import '../css-modules/Header/style.css'

const Header = (props) => {
    const handleSignOut = () => {
        props.performSignOut();
    }
    return (
        <div className = "container">
        <div className = "header">
            <SearchField/>
            <HeaderProfile userData = {props.userData}/>
            <span className = "signOut" onClick = {handleSignOut}>Sign Out</span>
        </div>
        </div>
    )
}

export default Header;
