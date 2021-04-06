import React from 'react';
import '../../../css-modules/UserProfile/Audience/AudiencePage/style.css';
import AudienceMain from '../AudienceMain/index';
import NetworkIndex from '../../../Network/index';


const AudiencePage = ({ userData, showUserProfile }) => { 

    return (
        <div className="container">
            <div className="audience__main">
                <div className="existing__audience">
                   <AudienceMain
                    userData = {userData}
                    showUserProfile = {showUserProfile}
                    audienceList = {true}
                   />
                </div>
                <div className="under__preview">
                 <NetworkIndex />             
                </div>
            </div>
        </div>
    )
}

export default AudiencePage;
