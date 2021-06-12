const userToPreviewReducer = (state = {}, action) => {
    switch (action.type) {
        case "SAVE_USER_TO_PREVIEW":
            return {...action.payload,
                    activeSubpage: "ABOUT"};
        case "SET_SUBPAGE_TO_ABOUT":
            return {...state,
                   activeSubpage: "ABOUT"};
        case 'SET_SUBPAGE_TO_AUDIENCE':
            return {...state,
                activeSubpage: "AUDIENCE"};
        case 'SET_SUBPAGE_TO_SKILLS':
            return {...state,
                activeSubpage: "SKILLS"};
        case 'SET_SUBPAGE_TO_SETTINGS':
            return {...state,
                activeSubpage: "SETTINGS"};
        case 'SET_SUBPAGE_TO_':
            return {...state,
                activeSubpage: ""};
        default:
            return state;
    }
}
 
export default userToPreviewReducer;

