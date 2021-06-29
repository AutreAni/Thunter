import { UPDATE_HAS_NEXT_PAGE, LOADING, SET_JOBS, JOBS_SET_ERROR } from '../constants/actionTypes';
const BASE_URL = 'https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json'


export const fetchJobs = () => dispatch => {
    dispatch({type: LOADING});
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
        console.log("reaches3")
        console.log("data from fetch", data)
        if(data){
            dispatch({type: SET_JOBS, payload: data})
        }
    })
    .catch(err => dispatch({type: JOBS_SET_ERROR, payload: err.message}));
}