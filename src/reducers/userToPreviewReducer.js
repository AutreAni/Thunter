import { SAVE_USER_TO_PREVIEW } from '../constants/actionTypes';

const ACTION_HANDLERS = {
  [SAVE_USER_TO_PREVIEW]: (state, action)=> {
    return {
        ...action.payload,
    }
  }
}

const userToPreviewReducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler? handler(state, action): state
}

export default userToPreviewReducer;

