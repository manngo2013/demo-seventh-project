import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import rootReducer from '../reducers/rootReducer';
import myLogger from '../middlewares/logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(myLogger)));

export default store;
