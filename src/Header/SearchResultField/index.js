import { useSelector } from 'react-redux';
import ShortProfile from '../../UserProfile/ShortProfile';
import { Link } from 'react-router-dom';

const SearchResultField = ({deactivateSearchMode, removeSearchInput}) => {
    const userList = useSelector(state => state.searchResult);
    const handleClick = () => {
         deactivateSearchMode();
        removeSearchInput();
    }
    const result = userList.length ? (userList.map(user => {
        return <li                
        onClick = {handleClick}
            key={user.id}>
            <Link to='/profile/about'>
                <ShortProfile
                    userData={user}
                />
            </Link>
        </li>
    })) : null;

    return (
        <div className="search-result-field">
            {userList.length ?
                <ul className = "result-wrapper">
                {result}
                </ul>
                : null
            }
        </div>

    );
}

export default SearchResultField;