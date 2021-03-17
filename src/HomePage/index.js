import React from 'react';
import SectionProfile from '../UserProfile/SectionProfile/index';
import Components from '../Components/index';
import '../css-modules/HomePage/homepage.css';


const HomePage = (props) => {
    return (
        <div className = "main">
            <div className = "container main__wrapper">
            <SectionProfile
                userData = {props.userData}
                goToMainProfile = {props.goToMainProfile}
            />
            <Components userData = {props.userData}
            />
            </div>
                  
        </div>
    )
}

export default HomePage;
