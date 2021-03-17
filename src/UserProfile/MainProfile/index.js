import React from 'react';
import Background from './Background/index';
import Avatar from '../Avatar/index';

const MainProfile = (props) => {
    const userData = props.userData;
    return (
        <div>
            {userData ?
                <div>
                <Background userData = {userData}/>
                <Avatar userData = {userData}/>
                </div>
                : null}

        </div>
    )
}

export default MainProfile;
