import { createStore, combineReducers } from 'redux';
import { usersReducer } from './Users/reducers';

const rootReducer = combineReducers({ users: usersReducer });

export const store = createStore(rootReducer);
