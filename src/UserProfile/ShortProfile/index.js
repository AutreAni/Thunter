import React from 'react';
import Avatar from '../Avatar/index';
import Username from '../Username/index';
import { setUserToPreview } from '../../actions/userToPreview';
import '../../css-modules/UserProfile/ShortProfile/style.css';
import { useDispatch } from 'react-redux';

const ShortProfile = ({ userData }) => {
    const dispatch = useDispatch();

    const showUserProfile = () => {
        dispatch(setUserToPreview(userData));
    }

    return (
        <div className="shortProfile"
            onClick={showUserProfile}>
            <Avatar
                className="short__avatar"
                avatar={userData.picture} />
            <Username username={userData.username} />
        </div>
    )
}

export default ShortProfile;
