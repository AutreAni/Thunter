import { SAVE_USER_TO_PREVIEW, SET_SUBPAGE_TO_ABOUT, SET_SUBPAGE_TO_AUDIENCE,SET_SUBPAGE_TO_SKILLS,SET_SUBPAGE_TO_SETTINGS, SET_SUBPAGE_TO_ } from '../constants/actionTypes';

const ACTION_HANDLERS = {
  [SAVE_USER_TO_PREVIEW]: (state, action)=> {
    return {
        ...action.payload,
        activeSubpage: "ABOUT"
    };
  },
  [SET_SUBPAGE_TO_ABOUT]: (state) => {
    return {...state,
        activeSubpage: "ABOUT"};
  },
  [SET_SUBPAGE_TO_AUDIENCE]: (state) => {
    return {...state,
        activeSubpage: "AUDIENCE"};
  },
  [SET_SUBPAGE_TO_SKILLS]: (state) => {
    return {...state,
        activeSubpage: "SKILLS"};
  },
  [SET_SUBPAGE_TO_SETTINGS]: (state) => {
    return {...state,
        activeSubpage: "SETTINGS"};
  },
  [SET_SUBPAGE_TO_]: (state) => {
    return {...state,
        activeSubpage: ""};
  },
}

const userToPreviewReducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler? handler(state, action): state
}

export default userToPreviewReducer;

