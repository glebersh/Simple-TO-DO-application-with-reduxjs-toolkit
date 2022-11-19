import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../store/slices/todoSlice';
import filterReducer from '../store/slices/filterSlice';
import priorityReducer from '../store/slices/prioritySlice';
import searchReducer from '../store/slices/searchSlice';
import dateReducer from '../store/slices/dateSlice';
import userReducer from '../store/slices/userSlice';

export default configureStore({
  reducer: {
    todoReducer: todoReducer,
    filter: filterReducer,
    priority: priorityReducer,
    search: searchReducer,
    date: dateReducer,
    user: userReducer
  }
});