import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../Todo-item/Todo-item';
import './Todo-list.css';
import { selectByFilter, selectAll } from '../selectors/selectors';

const TodoList = () => {
  const listItems = useSelector(selectByFilter);
  const content = listItems.map((item) => <TodoItem key={item.id} {...item} />);

  return (
    <ul>
      {content}
    </ul >
  )
};

export default TodoList;