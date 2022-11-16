import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/Todo-slice';
import filterReducer from '../slices/filterSlice';
import priorityReducer from '../slices/prioritySlice';
import usersReducer from '../slices/usersSlice';

export default configureStore({
  reducer: {
    todoReducer: todoReducer,
    filter: filterReducer,
    priority: priorityReducer,
    users: usersReducer
  }
});