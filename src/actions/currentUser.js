import { SAVE_CURRENT_USER, REMOVE_CURRENT_USER, UPDATE_CURRENT_USER } from '../constants/actionTypes';

export const setCurrentUser = (data) => ({type: SAVE_CURRENT_USER, payload: data});

export const removeCurrentUser = () => ({type: REMOVE_CURRENT_USER});

export const updateCurrentUser = obj => dispatch =>  dispatch({type: UPDATE_CURRENT_USER, payload: obj});

export const registerCurrentUser = (data, url) => dispatch => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => dispatch({ type: SAVE_CURRENT_USER, payload: data }))
        .catch(error => console.log(error));
}





