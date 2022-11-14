import React from 'react';
import FilterBlock from '../Filter-block';
import Searchbar from '../Searchbar';
import TodoForm from '../Todo-form';
import TodoList from '../Todo-list';
import './App.css';

const App = () => {
  return (
    <>
      <h1>Hello to TODO</h1>
      <FilterBlock />
      <Searchbar />
      <TodoList />
      <TodoForm />
    </>
  )
};

export default App;