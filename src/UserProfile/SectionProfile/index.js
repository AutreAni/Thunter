import React, { Fragment } from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/SectionProfile/sectionProfile.scss';
import AudienceInfo from '../Audience/AudienceInfo/index';
import Age from '../About/Age/index';
import Education from '../About/Education/index';
import Employment from '../About/Employment/index';
import LivesIn from '../About/LivesIn/index';
import { setUserToPreview } from '../../actions/userToPreview';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../../actions/activePage'


const SectionProfile = () => {
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch();

    const showUserProfile = () => {
        dispatch(setActivePage("PROFILE"));
        dispatch(setUserToPreview(currentUser))
    }
    return (
        <Fragment>
            { currentUser ? <div className="sectionProfile" onClick = {showUserProfile}>
                <Link to="/profile">
                <div className = "avatar__wrapper">
                        <Avatar className="section__avatar"
                        avatar={currentUser.picture} />
                        <Username 
                        username={currentUser.username}/>
                </div>
                   
                </Link>
                <div className="section__details">
                    <Link to="/audience">
                        <AudienceInfo
                            audience={currentUser.audience}
                            pageToPreview = {() => null}
                        />
                    </Link>
                    <Link to='/profile'>
                        {currentUser.about?.birthDate ?
                            (<Age
                                birthDate={currentUser.about.birthDate}
                            />
                            ) : null}
                        {currentUser.about?.LivesIn ?
                            (<LivesIn
                                livesIn={currentUser.about.livesIn}
                            />) : null}

                        {currentUser.about?.employment ?
                            (<Employment
                                employment={currentUser.about.employment}
                            />) : null}
                        {currentUser.about?.education ?
                            (<Education
                                education={currentUser.about.education}
                            />) : null}
                    </Link>
                </div>
            </div> : null}
        </Fragment>
    )
}

export default SectionProfile
