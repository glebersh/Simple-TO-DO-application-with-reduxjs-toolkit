import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Todo-form.css';
import { addItemAsync } from '../slices/todoSlice';
import { Button, Flex, Input, Tooltip } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import dayjs from 'dayjs';

const TodoForm = () => {
  const [text, setText] = useState('');
  const [reminderDate, setReminderDate] = useState(null);
  const [reminderInput, showReminderInput] = useState(false);
  const [showForm, changeFormView] = useState(false);

  const dispatch = useDispatch();

  const minDate = dayjs().format("YYYY-MM-DD");

  const confirmAddItem = (text, reminderDate) => {
    dispatch(addItemAsync({ text, reminderDate }));
    showReminderInput(false);
    setReminderDate(null);
    setText('');
  };

  return (
    <Flex align='center' justify='flex-start' w='100%' mt='2em'>
      <Tooltip label='Add new task?'>
        <PlusSquareIcon fontSize='26px' mr='1em' _hover={{
          'cursor': 'pointer',
          'transform': 'rotate3d(0,0,1, 90deg)',
          'transition': '0.55s'
        }}
          onClick={() => changeFormView(!showForm)} />
      </Tooltip>

      {showForm ?
        <>
          <label htmlFor='text-input'
            className='todo-form__label'></label>
          <Input id='text-input' placeholder='Add new task' w='60%'
            className='todo-form__input'
            type='text' value={text} onChange={(e) => setText(e.target.value)} />

          <Tooltip label='Add reminder?'>
            <i class="bi bi-calendar-plus" id='addReminder-checkbox'
              onClick={() => showReminderInput(!reminderInput)}></i>
          </Tooltip>
          {reminderInput ?
            <Input type='date' min={minDate} maxW='200px' ml='1em'
              onChange={(e) => setReminderDate(e.target.value)} /> : null}

          <Button onClick={() => confirmAddItem(text, reminderDate)}
            variant='outline' ml='1em'
            className='todo-form__button'>Add</Button>
        </> : null}
    </Flex>
  )
};

export default TodoForm;