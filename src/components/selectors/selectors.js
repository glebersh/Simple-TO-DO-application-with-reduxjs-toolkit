import { createSelector } from "@reduxjs/toolkit";

export const selectAll = state => state.todoReducer.todo;
export const selectActive = state => state.filter;

export const selectByFilter = createSelector(
  [selectAll, selectActive],
  (allTodos, activeFilter) => {
    if (activeFilter === 'all') return allTodos;

    if (activeFilter === ' completed') {
      return allTodos.filter((item) => item.completed);
    }
    return allTodos.filter((item) => !item.completed);
  });
