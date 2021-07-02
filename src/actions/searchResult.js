import { SET_SEARCH_RESULT_TO_LIST,SET_SEARCH_RESULT_TO_NOT_FOUND } from '../constants/actionTypes';
const requestUrl = `http://localhost:3000/users?q=`


export const fetchSearchResult = (text) => (dispatch) => {
   if(!text.length) {
       dispatch({type: SET_SEARCH_RESULT_TO_NOT_FOUND})
       return;
   }
        fetch(`${requestUrl}${text}`)
            .then(response => response.json())
            .then(data => {
                if(!data.length) {
                    dispatch({type: SET_SEARCH_RESULT_TO_NOT_FOUND});
                    return;
                }
                let filtered = data.filter(el => el.username.toLowerCase().includes(text.toLowerCase()))
                dispatch({type: SET_SEARCH_RESULT_TO_LIST, payload: filtered})
            })
            .catch(error => console.log(error))  

}

