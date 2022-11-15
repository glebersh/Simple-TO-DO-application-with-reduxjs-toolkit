import React from 'react'
import './Todo-item.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleteState } from '../slices/Todo-slice';
import { Flex } from '@chakra-ui/react';

const TodoItem = (props) => {
  const { id, title, completed } = props;
  const dispatch = useDispatch();

  return (
    <li className='todo-list'>
      <Flex justify='space-between' fontSize='1.2em'>
        <i className="bi-check2 todo-list__icon" onClick={() => dispatch(toggleCompleteState(id))}></i>
        <span style={completed ? { 'textDecoration': 'line-through' } :
          { 'textDecoration': 'none' }} className="todo-list__text">{title}</span>
        <i className="bi-trash todo-list__icon" onClick={() => dispatch(deleteTodo(id))}></i>
      </Flex>
    </li>
  )
};

export default TodoItem;