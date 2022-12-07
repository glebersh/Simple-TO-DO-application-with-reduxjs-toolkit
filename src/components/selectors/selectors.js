import { createSelector } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const selectAll = state => state.todoReducer.todo;
export const selectActive = state => state.filter;
export const selectPriority = state => state.priority;
export const selectSearchText = state => state.search;
export const selectReminderDate = state => state.date;

const today = dayjs().format("YYYY-MM-DD");
const tomorrow = dayjs().add(1, 'day').format("YYYY-MM-DD");


export const selectByFilters = createSelector(
  [selectAll, selectActive, selectPriority, selectSearchText, selectReminderDate],
  (allTodos, activeFilter, priorityFilter, searchFilter, dateFilter) => {

    const checkByActiveFilter = (item, filter) => {
      if (filter === 'active') {
        return !item.completed;
      }
      else if (filter === 'completed') {
        return item.completed;
      }
      return item;
    };

    const checkByPriority = (array, filter) => {
      if (filter === 'All') {
        return array;
      }
      return array.filter(item => item.priority === `${filter}`);
    };

    const checkByDate = (array, filter) => {
      if (filter === today || filter === tomorrow) {
        return array.filter(item => item.date === dateFilter);
      }
      return array;
    };

    return checkByDate(checkByPriority(allTodos, priorityFilter), dateFilter).filter(item => item.title.includes(searchFilter)
      && checkByActiveFilter(item, activeFilter));
  });