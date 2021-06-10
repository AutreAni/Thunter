import { SAVE_CURRENT_USER, REMOVE_CURRENT_USER, UPDATE_CURRENT_USER } from '../constants/actionTypes';

const ACTION_HANDLERS = {
  [SAVE_CURRENT_USER]: (state, action)=> {
    return action.payload;
  },
  [REMOVE_CURRENT_USER]: () => {
    return null
  },
  [UPDATE_CURRENT_USER]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  }
}

const currentUserReducer = (state = null, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler? handler(state, action): state
}

export default currentUserReducer;


