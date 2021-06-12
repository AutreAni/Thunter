export const setCurrentUser = data => dispatch => data? 
                                      dispatch({type: "SAVE_CURRENT_USER", payload: data}) :
                                      dispatch({type: "REMOVE_CURRENT_USER"});
export const updateCurrentUser = obj => dispatch =>  dispatch({type: 'UPDATE_CURRENT_USER', payload: obj})                                  


