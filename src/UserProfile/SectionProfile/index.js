import React,{Fragment} from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import '../../css-modules/UserProfile/sectionProfile.css';

const SectionProfile = (props) => {
    return (
        <Fragment>
            { props.userData ? <div className = "sectionProfile">
                    <Avatar className = "section__avatar"
                    userData = {props.userData}/>
                    <Username userData = {props.userData}/>
            </div> : null}
        </Fragment>
    )
}

export default SectionProfile
