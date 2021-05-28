import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../actions/features/activePageSlice';
import SearchField from './SearchField/index';
import ShortProfile from '../UserProfile/ShortProfile/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSignOutAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../css-modules/Header/style.css';
import { Link } from 'react-router-dom';
import { setCurrentUser } from '../actions/features/currentUserSlice';

const Header = ({ showUserProfile }) => {
    const activePage = useSelector(state => state.activePage);
    const userData = useSelector(state => state.currentUser);


    const dispatch  = useDispatch();
    const handleSignOut = () => {
        dispatch(setCurrentUser(null));
    }
    return (
        <div
            className="wrapper">
            <div
                className="header">
                <SearchField />
                <Link to="/"
                onClick = {() => dispatch(setActivePage("HOME"))}
                >
                    <span
                        className={`nav-li ${activePage === "HOME"?"active-nav":""}`}
                        >
                        <FontAwesomeIcon
                            icon={faHome}
                            className="icon"
                        /> Home
                    </span>
                </Link>
                <Link className = "jobs"
                onClick = {() => dispatch(setActivePage("JOBS"))}
                to="/jobs">
                    <span
                        className={`nav-li jobs ${activePage === "JOBS"?"active-nav":""}`}
                        >
                        <FontAwesomeIcon
                            icon={faBriefcase}
                            className="icon"
                        /> Jobs
                    </span>
                </Link>
                <Link to="/profile"
                onClick = {() => dispatch(setActivePage("PROFILE"))}
                >
                    <span
                        className={`nav-li ${activePage === "PROFILE"?"active-nav":""}`}
                        >
                        <ShortProfile
                            userData = { userData }
                            emptyUserArray = {()=>null}
                            pageToPreview = {()=>null}
                        />
                    </span>
                </Link>
                <Link to="/">
                <span
                    className="nav-li signOut"
                    onClick={handleSignOut}>
                    <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="icon" />
                      Sign Out
                </span>
                </Link>
            </div>
        </div>
    )
}

export default Header;
