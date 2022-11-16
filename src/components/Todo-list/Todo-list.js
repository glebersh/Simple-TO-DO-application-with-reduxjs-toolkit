import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../Todo-item/Todo-item';
import './Todo-list.css';
import { selectByTwoFilters } from '../selectors/selectors';
import { Select } from '@chakra-ui/react';
import { changePriorityFilter } from '../slices/prioritySlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const listItems = useSelector(selectByTwoFilters);
  const content = listItems.map((item) => <TodoItem key={item.id} {...item} />);

  return (
    <ul>
      <Select onChange={(e) => dispatch(changePriorityFilter(e.target.value))}>
        <option value='All'>All</option>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
      </Select>
      {content}
    </ul >
  )
};

export default TodoList;