import { createSelector } from "@reduxjs/toolkit";

export const selectAll = state => state.todoReducer.todo;
export const selectActive = state => state.filter;
export const selectPriority = state => state.priority;

export const selectByTwoFilters = createSelector(
  [selectAll, selectActive, selectPriority],
  (allTodos, activeFilter, priorityFilter) => {

    if (activeFilter === 'all' && priorityFilter === 'All') {
      return allTodos;
    }
    else if (activeFilter === 'active' && priorityFilter === 'All') {
      return allTodos.filter((item) => !item.completed);
    }
    else if (activeFilter === 'completed' && priorityFilter === 'All') {
      return allTodos.filter((item) => item.completed);
    }

    else if (activeFilter === 'all' && priorityFilter === 'Low') {
      return allTodos.filter((item) => item.priority === 'Low');
    }
    else if (activeFilter === 'all' && priorityFilter === 'Medium') {
      return allTodos.filter((item) => item.priority === 'Medium');
    }
    else if (activeFilter === 'all' && priorityFilter === 'High') {
      return allTodos.filter((item) => item.priority === 'High');
    }

    else if (activeFilter === 'completed' && priorityFilter === 'Low') {
      return allTodos.filter((item) => item.priority === 'Low' && item.completed);
    }
    else if (activeFilter === 'completed' && priorityFilter === 'Medium') {
      return allTodos.filter((item) => item.priority === 'Medium' && item.completed);
    }
    else if (activeFilter === 'completed' && priorityFilter === 'High') {
      return allTodos.filter((item) => item.priority === 'High' && item.completed);
    }

    else if (activeFilter === 'active' && priorityFilter === 'Low') {
      return allTodos.filter((item) => item.priority === 'Low' && !item.completed);
    }
    else if (activeFilter === 'active' && priorityFilter === 'Medium') {
      return allTodos.filter((item) => item.priority === 'Medium' && !item.completed);
    }
    else if (activeFilter === 'active' && priorityFilter === 'High') {
      return allTodos.filter((item) => item.priority === 'High' && !item.completed);
    }
  });

