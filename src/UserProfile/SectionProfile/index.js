import React,{Fragment} from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/SectionProfile/sectionProfile.css';

const SectionProfile = ({userData, goToMainProfile}) => {
    return (
        <Fragment>
            { userData ? <div className = "sectionProfile">
                    <Avatar className = "section__avatar"
                    userData = {userData}/>
                    <Username userData = {userData}
                    goToMainProfile = {goToMainProfile}
                    />
            </div> : null}
        </Fragment>
    )
}

export default SectionProfile
