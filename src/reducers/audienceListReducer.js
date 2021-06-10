import { SET_AUDIENCE_LIST, EMPTY_AUDIENCE_LIST } from '../constants/actionTypes'

const ACTION_HANDLERS = {
    [SET_AUDIENCE_LIST]: (state, action) => {
        return [...state, action.payload]
    },
    [EMPTY_AUDIENCE_LIST]: (state) => {
        return []
    }
}

const audienceListReducer = (state = [], action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}

export default audienceListReducer;