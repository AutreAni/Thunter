import React, { Fragment, useEffect } from 'react';
import ShortProfile from '../../ShortProfile/index';
import '../../../css-modules/UserProfile/Audience/AudienceList/style.css';
import { Link } from 'react-router-dom';
import { fetchAudienceList, emptyAudinceList } from '../../../actions/audienceList';
import { useDispatch, useSelector } from 'react-redux'

const AudienceList = ({ audience }) => {
    const dispatch = useDispatch();

    useEffect(() => {
          dispatch(fetchAudienceList(audience));
          return () => dispatch(emptyAudinceList())
    },[audience, dispatch]);

    const users = useSelector(state => state.audienceList);

      const usersList = users.length ? (users.map(user => {
        return <li
            key={user.id}>
            <Link to='/profile'>
                <ShortProfile
                    userData={user}
                />
            </Link>
        </li>
    })) : null;

    return (
        <Fragment>
            { users.length ?
                (<div
                    className="audience__list">
                    <ul>
                        {usersList}
                    </ul>
                </div>) : null}
        </Fragment>
    )
}

export default AudienceList;
