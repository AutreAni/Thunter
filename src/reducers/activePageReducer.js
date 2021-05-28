const initialState = "HOME";

const activePageReducer = (state = initialState, action) => {
    switch( action.type) {
        case "SET_PAGE_TO_HOME":
            return initialState;
        case 'SET_PAGE_TO_PROFILE':
            return 'PROFILE';
        case 'SET_PAGE_TO_JOBS':
            return "JOBS";
        default:
            return state;
    }
}
 
export default activePageReducer;