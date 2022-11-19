import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../Todo-item/Todo-item';
import './Todo-list.css';
import { selectByFilters } from '../selectors/selectors';
import { Select } from '@chakra-ui/react';
import { changePriorityFilter } from '../store/slices/prioritySlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const listItems = useSelector(selectByFilters);
  const content = listItems.map((item) => <TodoItem key={item.id} {...item} />);

  return (
    <ul className='todo-items-list'>
      <Select onChange={(e) => dispatch(changePriorityFilter(e.target.value))} w='20%' minW='200px'>
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