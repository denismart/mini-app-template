import thunk from 'redux-thunk';
import history from './history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from './js/store/reducers';
import { loggerInit } from 'mini-juice/common';

const store = createStore(rootReducer, applyMiddleware(thunk, routerMiddleware(history), loggerInit()));

export default store;
