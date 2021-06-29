import { SET_SEARCH_RESULT_TO_LIST, SET_SEARCH_RESULT_TO_NOT_FOUND } from '../constants/actionTypes'

const ACTION_HANDLERS = {
    [SET_SEARCH_RESULT_TO_LIST]: (state, action) => {
        return  [...action.payload]
    },
    [SET_SEARCH_RESULT_TO_NOT_FOUND]: (state) => {
        return []
    }
}

const searchResultReducer = (state = [], action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}

export default searchResultReducer;