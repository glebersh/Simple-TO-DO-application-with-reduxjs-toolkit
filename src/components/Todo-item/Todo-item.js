import React, { useState, useEffect } from 'react'
import './Todo-item.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleteState, editTextAsync, togglePriority } from '../slices/todoSlice';
import { Button, Flex, Input, Select, Tooltip } from '@chakra-ui/react';
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
        <Tooltip label={completed ? 'Mark as unfulfilled' : 'Mark as done'}>
          <CheckIcon className="todo-item__icon"
            onClick={() => dispatch(toggleCompleteState(id))}
            color={completed ? 'chartreuse' : 'darkgray'}></CheckIcon>
        </Tooltip>
        {isEditing ?
          <>
            <Input type='text' value={editedText} w='70%'
              onChange={(e) => setEditedText(e.target.value)} />
            <Button onClick={() => dispatch(editTextAsync({ id, editedText }))}
              bgColor='rgb(47, 117, 221)'
              color='white'
            >Confirm</Button>
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

          <Tooltip label='Change priority'>
            <Select onChange={(e) => dispatch(togglePriority({ id, priority: e.target.value }))} ml='1em'
              size='sm' variant='outline'>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </Select>
          </Tooltip>
        </Flex>
      </Flex>
    </li >
  )
};

export default TodoItem;