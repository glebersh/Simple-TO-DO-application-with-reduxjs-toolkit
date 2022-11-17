import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Todo-form.css';
import { addItemAsync } from '../slices/todoSlice';
import { Flex } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import dayjs from 'dayjs';

const TodoForm = () => {
  const [text, setText] = useState('');
  const [reminderDate, setReminderDate] = useState(null);
  const [reminderInput, showReminderInput] = useState(false);
  const dispatch = useDispatch();

  const minDate = dayjs().format("YYYY-MM-DD");

  const confirmAddItem = (text, reminderDate) => {
    dispatch(addItemAsync({ text, reminderDate }));
    showReminderInput(false);
    setReminderDate(null);
    setText('');
  };

  return (
    <Flex align='center' justify='center' w='100%' mt='1em'>
      <label htmlFor='text-input'
        className='todo-form__label'>
        <input id='text-input'
          className='todo-form__input'
          type='text' value={text} onChange={(e) => setText(e.target.value)}
        />
      </label>
      <PlusSquareIcon id='addReminder-checkbox' w='24px' h='24px' color='#1e90ff'
        onClick={() => showReminderInput(!reminderInput)}></PlusSquareIcon>

      {reminderInput ?
        <input type='date' min={minDate}
          onChange={(e) => setReminderDate(e.target.value)} value={reminderDate} /> : <span>Add reminder?</span>}

      <button onClick={() => confirmAddItem(text, reminderDate)}
        className='todo-form__button'>Add</button>
    </Flex>
  )
};

export default TodoForm;