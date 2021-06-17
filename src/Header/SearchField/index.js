import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../css-modules/Search/style.scss';

const SearchField = () => {
    return (
        <div className = "search__wrapper">
            <FontAwesomeIcon icon = {faSearch} className = "search__icon"/>
            <input type="text">
            </input>
        </div>
    )
}

export default SearchField
