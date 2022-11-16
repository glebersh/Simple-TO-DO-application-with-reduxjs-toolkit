import React from 'react'
import './Filter-block.css';
import { changeFilter } from '../slices/filterSlice';
import { useDispatch } from 'react-redux';

import { Flex } from '@chakra-ui/react';


const FilterBlock = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Filter your tasks: </h2>
      <Flex direction='row'
        justify='space-around'
        bg='gray.800'
        padding='10px'>
        <button className='filter-block__filter-button'
          onClick={() => dispatch(changeFilter('all'))}>
          All</button>
        <button className='filter-block__filter-button'
          onClick={() => dispatch(changeFilter('active'))}>
          Active</button>
        <button className='filter-block__filter-button'
          onClick={() => dispatch(changeFilter('completed'))}>
          Done</button>
      </Flex >
    </>
  )
};

export default FilterBlock;