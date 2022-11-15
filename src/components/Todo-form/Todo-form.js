import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Todo-form.css';
import { addItemAsync } from '../slices/Todo-slice';

const TodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  // const addTask = () => {
  //   dispatch(addItem(text));
  //   setText('');
  // };

  return (
    <>
      <label htmlFor='text-input'
        className='todo-form__label'>
        <input id='text-input'
          className='todo-form__input'
          type='text' value={text} onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={() => dispatch(addItemAsync(text))}
        className='todo-form__button'>Add</button>
    </>
  )
};

export default TodoForm;