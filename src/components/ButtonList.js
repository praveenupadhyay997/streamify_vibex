import React from 'react'
import Button from './Button';
import { categoryList } from '../utils/constants';

const category = categoryList;

const ButtonList = () => {
  return (
    <div  className='flex flex-wrap'>
      {
        category.map((category, index) => {
          return <Button key={'__'+index} name={category}/>
        })
      }
    </div>
  )
}

export default ButtonList;