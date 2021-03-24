import React,{Fragment} from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/SectionProfile/sectionProfile.css';
import AudienceInfo from '../Audience/AudienceInfo/index';

const SectionProfile = ({userData, goToMainProfile, goToAudiencePage}) => {
    return (
        <Fragment>
            { userData ? <div className = "sectionProfile">
                    <Avatar className = "section__avatar"
                    userData = {userData}/>
                    <Username userData = {userData}
                    goToMainProfile = {goToMainProfile}
                    />
                    <AudienceInfo 
                    audience = {userData.audience}
                    goToAudiencePage = {goToAudiencePage}
                    />
            </div> : null}
        </Fragment>
    )
}

export default SectionProfile
