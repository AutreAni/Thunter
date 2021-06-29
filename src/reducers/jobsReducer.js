import { LOADING, SET_JOBS, JOBS_SET_ERROR } from '../constants/actionTypes';

const ACTION_HANDLERS = {
  [LOADING]: (state, action)=> {
    return {
        loading:true,
        error:false,
        data: []
    }
  },
  [SET_JOBS]: (state, action) => {
    return {
        loading: false,
        error:false,
        data: action.payload
    }
  },
  [JOBS_SET_ERROR]: (state, action) => {
    return {
      loading:false,
      data:[],
      error: action.payload
    }
  }
}

const jobsReducer = (state = null, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler? handler(state, action): state
}

export default jobsReducer;
