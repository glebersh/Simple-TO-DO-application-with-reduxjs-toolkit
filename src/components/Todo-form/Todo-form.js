import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Todo-form.css';
import { addItemAsync } from '../slices/todoSlice';
import { Button, Flex, Input, Tooltip, Box } from '@chakra-ui/react';
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
    <Flex align='center' justify='flex-start' w='100%' mt='2em' pb='3em' flexWrap='wrap'>
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
          <Input id='text-input' placeholder='Add new task'
            mt={{
              xs: '1em', s: '1em',
              md: '0', lg: '0',
              xl: '0', xll: '0'
            }}
            w={{
              xs: '100%', s: '100%',
              md: '60%', lg: '60%', xl: '60%', xll: '60%'
            }}
            className='todo-form__input'
            type='text' value={text} onChange={(e) => setText(e.target.value)} />
          <Flex mt={{
            xs: '1em', s: '1em',
            md: '0', lg: '0',
            xl: '0', xll: '0'
          }}
            justify='flex-start' align='center'
            w={{
              xs: '100%', s: '100%',
              md: '30%', lg: '30%', xl: '30%', xll: '30%'
            }} flexWrap='wrap'>
            <Tooltip label='Add reminder?'>
              <i className="bi bi-calendar-plus" id='addReminder-checkbox'
                onClick={() => showReminderInput(!reminderInput)}></i>
            </Tooltip>
            {reminderInput ?
              <Input type='date' min={minDate} maxW='200px' ml={{
                xs: '2em', s: '2em',
                md: '1em', lg: '1em', xl: '1em', xll: '1em'
              }}
                onChange={(e) => setReminderDate(e.target.value)} /> : null}
            <Button onClick={() => confirmAddItem(text, reminderDate)}
              variant='outline' display={{
                xs: 'block', s: 'block',
                md: 'inline-block', lg: 'inline-block', xl: 'inline-block', xll: 'inline-block'
              }} minW='100px'
              className='todo-form__button'
              m={{
                xs: '2em auto 0', s: '2em auto 0',
                md: '0 0 0 1em', lg: '0 0 0 1em', xl: '0 0 0 1em', xll: '0 0 0 1em'
              }}>Add</Button>
          </Flex>
        </> : null
      }
    </Flex >
  )
};

export default TodoForm;