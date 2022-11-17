import React, { useState, useEffect } from 'react'
import './Todo-item.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleteState, editTextAsync, togglePriority } from '../slices/todoSlice';
import { Flex, Select, Tooltip } from '@chakra-ui/react';
import { DeleteIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';

const TodoItem = (props) => {
  const { id, title, completed } = props;
  const dispatch = useDispatch();
  const [isEditing, setEditingStatus] = useState(false);
  const [editedText, setEditedText] = useState(props.title);

  useEffect(() => {
    setEditingStatus(false);
  }, [title])


  return (
    <li className='todo-item'>
      <Flex justify='space-between' fontSize='1.2em' align='center'>
        <Tooltip label='Mark as complete'>
          <CheckIcon className="todo-item__icon"
            onClick={() => dispatch(toggleCompleteState(id))} color='chartreuse'></CheckIcon>
        </Tooltip>
        {isEditing ?
          <>
            <input type='text' value={editedText}
              onChange={(e) => setEditedText(e.target.value)} />
            <button onClick={() => dispatch(editTextAsync({ id, editedText }))}>Confirm</button>
          </> :
          <span style={completed ? { 'textDecoration': 'line-through' } :
            { 'textDecoration': 'none' }} className="todo-list__text">{title}</span>}

        <Flex align='center'>
          <Tooltip label='Edit'>
            <EditIcon className="todo-item__icon"
              onClick={() => setEditingStatus(!isEditing)}
              mr='1em'></EditIcon>
          </Tooltip>
          <Tooltip label='Delete task'>
            <DeleteIcon className="todo-item__icon"
              onClick={() => dispatch(deleteTodo(id))} color='red'></DeleteIcon>
          </Tooltip>

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