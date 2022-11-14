import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Todo-form.css';
import { addItem } from '../slices/Todo-slice';

const TodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addItem(text));
    setText('');
  };

  return (
    <>
      <label htmlFor='text-input'>
        <input id='text-input'
          type='text' value={text} onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={addTask}>Add</button>
    </>
  )
};

export default TodoForm;