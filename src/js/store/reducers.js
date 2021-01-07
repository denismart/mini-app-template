import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { globals } from './globals/reducers';
import { vk } from './vk/reducers';

export const rootReducer = combineReducers({
    router: routerReducer,
    globals,
    vk,
});
