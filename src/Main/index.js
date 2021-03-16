import React from 'react';
import SectionProfile from '../UserProfile/SectionProfile/index';
import Components from '../Components/index';
import '../css-modules/Main/main.css';


const Main = (props) => {
    return (
        <div className = "main">
            <div className = "container main__wrapper">
            <SectionProfile
                userData = {props.userData}
            />
            <Components userData = {props.userData}
            />
            </div>
                  
        </div>
    )
}

export default Main
