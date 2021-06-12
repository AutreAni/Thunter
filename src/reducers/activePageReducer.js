import { SET_PAGE_TO_HOME, SET_PAGE_TO_PROFILE, SET_PAGE_TO_JOBS } from '../constants/actionTypes';
const initialState = "HOME";

const ACTION_HANDLERS = {
  [SET_PAGE_TO_HOME]: ()=> {
    return "HOME";
  },
  [SET_PAGE_TO_PROFILE]: () => {
    return "PROFILE"
  },
  [SET_PAGE_TO_JOBS]: () => {
    return "JOBS"
  }
}

const activePageReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler? handler(): state;
}

export default activePageReducer;

