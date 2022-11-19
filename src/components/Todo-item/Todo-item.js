import React, { useState, useEffect } from 'react'
import './Todo-item.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleteState, editTextAsync, togglePriority } from '../store/slices/todoSlice';
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
      <Flex justify='flex-start' fontSize='1.2em' align='center'
        flexWrap='wrap'>
        <Tooltip label={completed ? 'Mark as uncomplete' : 'Mark as complete'}>
          <CheckIcon className="todo-item__icon"
            onClick={() => dispatch(toggleCompleteState(id))}
            color={completed ? 'chartreuse' : 'darkgray'}></CheckIcon>
        </Tooltip>
        {isEditing ?
          <>
            <Input type='text' value={editedText}
              w={{
                xs: '80%', s: '70%',
                md: '60%', lg: '60%',
                xl: '60%', xll: '60%'
              }}
              ml={{
                xs: '1em', s: '1em',
                md: '3em', lg: '3.5em',
                xl: '3.5em', xll: '3.5em'
              }}
              onChange={(e) => setEditedText(e.target.value)} />
            <Button onClick={() => dispatch(editTextAsync({ id, editedText }))}
              color='white' m={{
                xs: '1em auto 0', s: '0 auto',
                md: '0 0 0 1em', lg: '0 0 1em 1em',
                xl: '0 1em 1em 1em', xll: '0 1em 0 1em'
              }}>Confirm</Button>
          </> :
          <span style={completed ? { 'textDecoration': 'line-through' } :
            { 'textDecoration': 'none' }} className="todo-list__text">{title}</span>}

        <Flex align='center' w={{
          xs: '100%', s: '100%',
          md: '100%', lg: '20%',
          xl: '18%', xll: '18%'
        }}
          mt={{
            xs: '1.5em', s: '1.5em',
            md: '1.5em', lg: '0',
            xl: '0', xll: '0'
          }}>
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
            <Select onChange={(e) =>
              dispatch(togglePriority({ id, priority: e.target.value }))}
              ml='1em'
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