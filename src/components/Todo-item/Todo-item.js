import React from 'react'
import './Todo-item.css';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleDone } from '../slices/Todo-slice';

const TodoItem = (props) => {
  const { id, text, done } = props;
  const dispatch = useDispatch();

  return (
    <li id={id}>
      <button onClick={() => dispatch(toggleDone({ id }))}>Done</button>
      <span style={done ? { 'textDecoration': 'line-through' } : { 'textDecoration': 'none' }}>{text}</span>
      <button onClick={() => dispatch(deleteItem({ id }))}>Delete</button>
    </li>
  )
};

export default TodoItem;