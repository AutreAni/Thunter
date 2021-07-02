import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import SearchField from './SearchField/index';
import ShortProfile from '../UserProfile/ShortProfile/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSignOutAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../css-modules/Header/style.scss';
import { Link } from 'react-router-dom';
import { removeCurrentUser } from '../actions/currentUser';
import SearchResultField from './SearchResultField';
import { useLocation } from 'react-router-dom';
import headerLogo from '../Images/header-logo2.png';

const Header = ({ innerWidth }) => {
    const [searchActive, setSearchActive] = useState(false);
    const [value, setValue] = useState("");
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    const pathName = usePathname();
    const userData = useSelector(state => state.currentUser);


    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(removeCurrentUser(null));
    }

    const activateSearchMode = () => {
        setSearchActive(true)
    }

    const deactivateSearchMode = () => {
        setSearchActive(false)
    }

    const removeSearchInput = () => {
        setValue("")
    }

    return (
        <div
            className="header">
            <div className='logo-wrapper'>
                <Link
                    className="header-logo"
                    to="/"
                   >
                <img src= {headerLogo}
                 alt = "header-logo"
                 onClick = {
                    () => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  })
                  }></img>
                </Link>
                {userData ?
                    <SearchField
                        value={value}
                        setValue={setValue}
                        searchActive={searchActive}
                        activateSearchMode={activateSearchMode}
                        deactivateSearchMode={deactivateSearchMode}
                    /> : null
                }

            </div>
            <div className="nav-list-wrapper">
                {userData ?
                    <Link to="/"
                     className={`nav-li ${pathName === "/" ? "active-nav" : ""}`}>
                        <span>
                            <FontAwesomeIcon
                                icon={faHome}
                                className="icon"
                            /> Home
                        </span>
                    </Link>
                    : null
                }
                {innerWidth < 650 && userData ?
                    <Link to="/jobs"
                     className={`nav-li jobs ${pathName === "/jobs" ? "active-nav" : ""}`}>
                        <span>
                            <FontAwesomeIcon
                                icon={faBriefcase}
                                className="icon"
                            /> Jobs
                        </span>
                    </Link>
                    :
                    null}
                {userData ?
                    <Link to="/profile/about" className={`nav-li ${pathName.startsWith("/profile") ? "active-nav" : ""}`}>
                       <span>
                            <ShortProfile
                                userData={userData}
                                emptyUserArray={() => null}
                                pageToPreview={() => null}
                            />
                        </span>
                    </Link>
                    : null}
                {userData ?
                    <Link  onClick={handleSignOut} to="/sign-page/login" className="nav-li signOut">
                        <span className = "sign-out">
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className="icon" />
                            Sign Out
                        </span>
                    </Link>
                    : null}
                {!userData &&
                    (pathName !== '/sign-page/login' &&
                        pathName !== '/sign-page/sign-up') ?
                    <div className="sign-options-wrapper">
                        <Link to="/sign-page/login">
                            <span
                                className="nav-li"
                                onClick={handleSignOut}>
                                Log In
                            </span>
                        </Link>
                        <Link to="/sign-page/sign-up">
                            <span
                                className="nav-li"
                                onClick={handleSignOut}>
                                Sign Up
                            </span>
                        </Link>
                    </div>
                    : null}
            </div>
            {
                searchActive ?
                    <SearchResultField
                        deactivateSearchMode={deactivateSearchMode}
                        removeSearchInput={removeSearchInput}
                    />
                    : null
            }
        </div>

    )
}

export default Header;
