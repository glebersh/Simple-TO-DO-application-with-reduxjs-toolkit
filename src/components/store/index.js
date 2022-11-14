import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/Todo-slice';
import filterReducer from '../slices/filterSlice';

export default configureStore({
  reducer: {
    todoReducer: todoReducer,
    filter: filterReducer
  }
});