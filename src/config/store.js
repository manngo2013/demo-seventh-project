import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from '../reducers/rootReducer';
import myLogger from '../middlewares/logger';

const store = createStore(rootReducer, {}, applyMiddleware(myLogger));

export default store;
