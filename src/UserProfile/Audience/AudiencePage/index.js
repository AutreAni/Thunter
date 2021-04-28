import React from 'react';
import '../../../css-modules/UserProfile/Audience/AudiencePage/style.css';
import AudienceMain from '../AudienceMain/index';
import NetworkIndex from '../../../Network/index';


const AudiencePage = ({ userData, showUserProfile, users }) => { 

    return (
        <div className="container">
            <div className="audience__main">
                <div className="existing__audience">
                   <AudienceMain
                    userData = {userData}
                    showUserProfile = {showUserProfile}
                    users = {users}
                    audienceList = {true}
                    pageToPreview = {()=>null}
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
