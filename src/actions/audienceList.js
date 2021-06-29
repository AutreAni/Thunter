import { SET_AUDIENCE_LIST, EMPTY_AUDIENCE_LIST } from '../constants/actionTypes';
const requestUrl = `http://localhost:3000/users/`


export const fetchAudienceList = (audience) => (dispatch) => {
    if(audience && audience.length ){
    audience.forEach(user => {
        fetch(`${requestUrl}${user}`)
            .then(response => response.json())
            .then(data => {
                dispatch({type: SET_AUDIENCE_LIST, payload: data})
            })
            .catch(error => console.log(error))
    })
  }
}

export const emptyAudinceList = () => dispatch => {
    dispatch({ type: EMPTY_AUDIENCE_LIST})
}
