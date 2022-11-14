import React from 'react'
import './Filter-block.css';
import { changeFilter } from '../slices/filterSlice';
import { useDispatch } from 'react-redux';


const FilterBlock = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(changeFilter('all'))}>
        All</button>
      <button onClick={() => dispatch(changeFilter('active'))}>
        Active</button>
      <button onClick={() => dispatch(changeFilter('done'))}>
        Done</button>
    </>
  )
};

export default FilterBlock;