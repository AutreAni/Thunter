import React, { Fragment } from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/SectionProfile/sectionProfile.css';
import AudienceInfo from '../Audience/AudienceInfo/index';
import Age from '../About/Age/index';
import Education from '../About/Education/index';
import Employment from '../About/Employment/index';
import LivesIn from '../About/LivesIn/index';
import { Link } from 'react-router-dom';



const SectionProfile = ({ userData, showUserProfile }) => {
    const handleClick = () => {
        showUserProfile(userData)
    }
    return (
        <Fragment>
            { userData ? <div className="sectionProfile" onClick = {handleClick}>
                <Link to="/profile">
                <div className = "avatar__wrapper">
                    <Avatar className="section__avatar"
                        userData={userData} />
                        <Username userData={userData}
                    />
                </div>
                   
                </Link>
                <div className="section__details">
                    <Link to="/audience">
                        <AudienceInfo
                            audience={userData.audience}
                            pageToPreview = {() => null}
                        />
                    </Link>
                    <Link to='/profile'>
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
                    </Link>
                </div>
            </div> : null}
        </Fragment>
    )
}

export default SectionProfile
