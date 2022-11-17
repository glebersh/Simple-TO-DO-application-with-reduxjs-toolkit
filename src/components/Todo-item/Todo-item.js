import React, { useState, useEffect } from 'react'
import './Todo-item.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleteState, editTextAsync, togglePriority } from '../slices/todoSlice';
import { Flex, Select } from '@chakra-ui/react';

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
      <Flex justify='space-between' fontSize='1.2em' align='center' mt='1em'>
        <i className="bi-check2 todo-list__icon done-icon" onClick={() => dispatch(toggleCompleteState(id))}></i>

        {isEditing ?
          <>
            <input type='text' value={editedText}
              onChange={(e) => setEditedText(e.target.value)} />
            <button onClick={() => dispatch(editTextAsync({ id, editedText }))}>Confirm</button>
          </> :
          <span style={completed ? { 'textDecoration': 'line-through' } :
            { 'textDecoration': 'none' }} className="todo-list__text">{title}</span>}

        <Flex align='center'>
          <i className="bi-pencil todo-list__icon edit-icon" onClick={() => setEditingStatus(!isEditing)}></i>
          <i className="bi-trash todo-list__icon delete-icon" onClick={() => dispatch(deleteTodo(id))}></i>

          <Select onChange={(e) => dispatch(togglePriority({ id, priority: e.target.value }))} ml='1em'
            size='sm' variant='outline'>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </Select>
        </Flex>
      </Flex>
    </li >
  )
};

export default TodoItem;