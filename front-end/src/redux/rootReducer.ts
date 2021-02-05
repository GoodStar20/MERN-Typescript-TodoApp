import { combineReducers } from 'redux';
import todoReducer from './todo/todoReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  todoList: todoReducer,
  form: formReducer
});

export default rootReducer;
