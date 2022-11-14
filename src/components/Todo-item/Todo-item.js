import React from 'react'
import './Todo-item.css';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleDone } from '../slices/Todo-slice';
import { Box, Flex } from '@chakra-ui/react';

const TodoItem = (props) => {
  const { id, text, done } = props;
  const dispatch = useDispatch();

  return (
    <li className='todo-list'>
      <Flex justify='space-between' fontSize='1.2em'>
        <i class="bi-check2 todo-list__icon" onClick={() => dispatch(toggleDone({ id }))}></i>
        <span style={done ? { 'textDecoration': 'line-through' } :
          { 'textDecoration': 'none' }} className="todo-list__text">{text}</span>
        <i class="bi-trash todo-list__icon" onClick={() => dispatch(deleteItem({ id }))}></i>
      </Flex>
    </li>
  )
};

export default TodoItem;