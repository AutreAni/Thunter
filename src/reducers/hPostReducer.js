import { ADDLIST, DELETELIST } from "../constants/actionTypes";

const initialState = {
  post: [ ],
}

const hPostReducer = (state=initialState, action) => {
  switch (action.type) {
   
    case ADDLIST: return {
      ...state,
      post: [...state.post, {
       id: action.payload.id,
       text: action.payload.text,
   
      }] 
    }
     case DELETELIST: return {
      ...state,
      post: state.post.filter((item) => item.id !== action.payload)
    }
  
    default:
      return state   
   } 
  }


export default hPostReducer