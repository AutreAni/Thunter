import { combineReducers } from 'redux';
import activePageReducer from './activePageReducer';
import currentUserReducer from './currentUserReducer';
import userToPreviewReducer from './userToPreviewReducer';
import audienceListReducer from './audienceListReducer';


const rootReducer = combineReducers({
        currentUser: currentUserReducer,
        activePage: activePageReducer,
        userToPreview: userToPreviewReducer,
        audienceList: audienceListReducer,
})

export default rootReducer;