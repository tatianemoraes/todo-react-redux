import { combineReducers } from 'redux';
import { tasks } from '../modules/tasks/reducers';

export const rootReducer = combineReducers({ 
  tasks,
});