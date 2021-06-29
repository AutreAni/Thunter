import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResult } from '../../actions/searchResult';
import { SET_SEARCH_RESULT_TO_NOT_FOUND } from '../../constants/actionTypes';

const SearchField = ({ value, setValue, activateSearchMode, deactivateSearchMode}) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        var timerId = setTimeout(()=>dispatch(fetchSearchResult(value)), 1000);         
        return clearImmediate(timerId);
    }, [value, dispatch]);

    const handleBlur = () => {
        if(!value.length) {
        dispatch({type: SET_SEARCH_RESULT_TO_NOT_FOUND})
        deactivateSearchMode();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.search.blur();
        setValue("");
        dispatch({type: SET_SEARCH_RESULT_TO_NOT_FOUND})
        deactivateSearchMode();
    }
    return (
        <div className = "search__wrapper">
            <FontAwesomeIcon icon = {faSearch} className = "search__icon"/>
            <form onSubmit = {handleSubmit}>
            <input type="text"
            name = "search"
            onFocus = { activateSearchMode }
            onBlur = { handleBlur }
            onChange = {(e)=> setValue(e.target.value)}
            value = {value}>
            </input>
            </form>
        </div>
    )
}

export default SearchField
