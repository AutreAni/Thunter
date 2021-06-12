import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware  from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;