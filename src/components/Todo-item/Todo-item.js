import React, { useState, useEffect } from 'react'
import './Todo-item.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleteState, editTextAsync } from '../slices/Todo-slice';
import { Flex } from '@chakra-ui/react';

const TodoItem = (props) => {
  const { id, title, completed } = props;
  const dispatch = useDispatch();
  const [isEditing, setEditingStatus] = useState(false);
  const [editedText, setEditedText] = useState(props.title);

  useEffect(() => {
    setEditingStatus(false);
  }, [title])


  return (
    <li className='todo-list'>
      <Flex justify='space-between' fontSize='1.2em'>
        <i className="bi-check2 todo-list__icon" onClick={() => dispatch(toggleCompleteState(id))}></i>

        {isEditing ? <>
          <input type='text' value={editedText}
            onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={() => dispatch(editTextAsync({ id, editedText }))}>Confirm</button>
        </> :

          <span style={completed ? { 'textDecoration': 'line-through' } :
            { 'textDecoration': 'none' }} className="todo-list__text">{title}</span>}
        <i className="bi-pencil todo-list__icon" onClick={() => setEditingStatus(!isEditing)}></i>

        <i className="bi-trash todo-list__icon" onClick={() => dispatch(deleteTodo(id))}></i>
      </Flex>
    </li>
  )
};

export default TodoItem;