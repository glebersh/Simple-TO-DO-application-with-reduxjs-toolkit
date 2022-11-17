import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';
import filterReducer from '../slices/filterSlice';
import priorityReducer from '../slices/prioritySlice';
import searchReducer from '../slices/searchSlice';
import dateReducer from '../slices/dateSlice';
import usersReducer from '../slices/usersSlice';

export default configureStore({
  reducer: {
    todoReducer: todoReducer,
    filter: filterReducer,
    priority: priorityReducer,
    search: searchReducer,
    date: dateReducer,
    users: usersReducer
  }
});