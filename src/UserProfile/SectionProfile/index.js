import React, { Fragment } from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/SectionProfile/sectionProfile.css';
import AudienceInfo from '../Audience/AudienceInfo/index';
import Age from '../About/Age/index';
import Education from '../About/Education/index';
import Employment from '../About/Employment/index';
import LivesIn from '../About/LivesIn/index';




const SectionProfile = ({ userData, goToMainProfile, goToAudiencePage }) => {
    return (
        <Fragment>
            { userData ? <div className="sectionProfile">
                <Avatar className="section__avatar"
                    userData={userData} />
                <Username userData={userData}
                    goToMainProfile={goToMainProfile}
                />
                <div className = "section__details">
                <AudienceInfo
                    audience={userData.audience}
                    showAudience={goToAudiencePage}
                />
                {userData.about?.birthDate ?
                    (<Age
                        birthDate={userData.about.birthDate}
                    />
                    ) : null}
                {userData.about?.LivesIn ?
                    (<LivesIn
                        livesIn={userData.about.livesIn}
                    />) : null}

                {userData.about?.employment ?
                    (<Employment
                        employment={userData.about.employment}
                    />) : null}
                {userData.about?.education ?
                    (<Education
                        education={userData.about.education}
                    />) : null} 
                    </div>
            </div> : null}
        </Fragment>
    )
}

export default SectionProfile
