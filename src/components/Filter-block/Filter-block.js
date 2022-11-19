import React, { useState } from 'react'
import './Filter-block.css';
import { changeFilter } from '../slices/filterSlice';
import { useDispatch } from 'react-redux';

import { Box, Button, Flex } from '@chakra-ui/react';


const FilterBlock = () => {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState();

  const handlerFilter = (e, filter) => {
    setActiveBtn(e.target.id);
    dispatch(changeFilter(filter));
  };

  return (
    <Box mt='2em'>
      <h2 style={{ 'fontSize': '1.25em' }}>Filter tasks: </h2>
      <Flex direction='row'
        justify='space-around'
        border='1px solid'
        bg='transparent'
        padding='10px'>
        <Button className={activeBtn === 'btn-1' ? 'active-btn' : ''}
          id='btn-1'
          variant='outline'
          w={{ xs: '80px', s: '120px' }}
          onClick={(e) => handlerFilter(e, 'all')}>
          All</Button>
        <Button className={activeBtn === 'btn-2' ? 'active-btn' : ''}
          id='btn-2'
          variant='outline' w={{ xs: '80px', s: '120px' }}
          onClick={(e) => handlerFilter(e, 'active')}>
          Active</Button>
        <Button className={activeBtn === 'btn-3' ? 'active-btn' : ''}
          id='btn-3'
          variant='outline' w={{ xs: '80px', s: '120px' }}
          onClick={(e) => handlerFilter(e, 'completed')}>
          Done</Button>
      </Flex >
    </Box>
  )
};

export default FilterBlock;