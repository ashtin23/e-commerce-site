import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//bringing in middleware like this in case we want to modify the array in the future
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
