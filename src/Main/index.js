import React from 'react';
import SectionProfile from '../UserProfile/SectionProfile/index';

const Main = (props) => {
    return (
        <div className = "main">
            <div className = "container">
            <SectionProfile
                userData = {props.userData}
            />
            </div>
            
        </div>
    )
}

export default Main
