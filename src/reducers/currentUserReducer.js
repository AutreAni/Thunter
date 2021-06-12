const currentUserReducer = (state = null, action) => {
    switch( action.type ){
        case "SAVE_CURRENT_USER":
         return action.payload;
        case "REMOVE_CURRENT_USER":
          return null;
        case "UPDATE_CURRENT_USER":
          return{
            ...state,
            ...action.payload,
          }
        default:
            return state;
    }
}

export default currentUserReducer;


