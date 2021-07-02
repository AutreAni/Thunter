import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import userToPreviewReducer from './userToPreviewReducer';
import audienceListReducer from './audienceListReducer';
import searchResultReducer from './searchResult';


const rootReducer = combineReducers({
        currentUser: currentUserReducer,
        userToPreview: userToPreviewReducer,
        audienceList: audienceListReducer,
        searchResult: searchResultReducer,
})

export default rootReducer;