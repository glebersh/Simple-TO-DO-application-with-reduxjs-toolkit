import { createSelector } from "@reduxjs/toolkit";

export const selectAll = state => state.todoReducer.todo;
export const selectActive = state => state.filter;

export const selectByFilter = createSelector(
  [selectAll, selectActive],
  (allTodos, activeFilter) => {
    if (activeFilter === 'all') return allTodos;

    if (activeFilter === 'done') {
      return allTodos.filter((item) => item.done);
    }
    return allTodos.filter((item) => !item.done);
  });
