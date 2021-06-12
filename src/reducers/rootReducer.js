import { combineReducers } from 'redux';
import activePageReducer from './activePageReducer';
import currentUserReducer from './currentUserReducer';
import userToPreviewReducer from './userToPreviewReducer';

const rootReducer = combineReducers({
        currentUser: currentUserReducer,
        activePage: activePageReducer,
        userToPreview: userToPreviewReducer,
})

export default rootReducer;