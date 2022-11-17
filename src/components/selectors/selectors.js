import { createSelector } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const selectAll = state => state.todoReducer.todo;
export const selectActive = state => state.filter;
export const selectPriority = state => state.priority;
export const selectSearchText = state => state.search;
export const selectReminderDate = state => state.date;



// Checking for three filters:
// --First filter is for reminder date,
//   --Filtering by 'complete' property on task,
//     --Filtering by 'priority' property,
//       --and filtering by current searchbar text.

export const selectByFilters = createSelector(
  [selectAll, selectActive, selectPriority, selectSearchText, selectReminderDate],
  (allTodos, activeFilter, priorityFilter, searchFilter, dateFilter) => {

    if (dateFilter === dayjs().format("YYYY-MM-DD")) {
      if (activeFilter === 'all' && priorityFilter === 'All') {
        return allTodos.filter((item) => item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'active' && priorityFilter === 'All') {
        return allTodos.filter((item) => !item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'completed' && priorityFilter === 'All') {
        return allTodos.filter((item) => item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'all' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'all' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'all' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'completed' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'completed' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'completed' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'active' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && !item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'active' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && !item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'active' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && !item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
    }

    else if (dateFilter === dayjs().add(1, 'day').format("YYYY-MM-DD")) {
      if (activeFilter === 'all' && priorityFilter === 'All') {
        return allTodos.filter((item) => item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'active' && priorityFilter === 'All') {
        return allTodos.filter((item) => !item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'completed' && priorityFilter === 'All') {
        return allTodos.filter((item) => item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'all' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'all' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'all' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'completed' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'completed' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'completed' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'active' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && !item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'active' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && !item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
      else if (activeFilter === 'active' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && !item.completed && item.title.includes(searchFilter) && item.date === dateFilter);
      }
    }

    else {
      if (activeFilter === 'all' && priorityFilter === 'All') {
        return allTodos.filter((item) => item.title.includes(searchFilter));
      }
      else if (activeFilter === 'active' && priorityFilter === 'All') {
        return allTodos.filter((item) => !item.completed && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'completed' && priorityFilter === 'All') {
        return allTodos.filter((item) => item.completed && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'all' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'all' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'all' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'completed' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && item.completed && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'completed' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && item.completed && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'completed' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && item.completed && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'active' && priorityFilter === 'Low') {
        return allTodos.filter((item) => item.priority === 'Low' && !item.completed && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'active' && priorityFilter === 'Medium') {
        return allTodos.filter((item) => item.priority === 'Medium' && !item.completed && item.title.includes(searchFilter));
      }
      else if (activeFilter === 'active' && priorityFilter === 'High') {
        return allTodos.filter((item) => item.priority === 'High' && !item.completed && item.title.includes(searchFilter));
      }
    }
  });

