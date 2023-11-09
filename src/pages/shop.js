import React, { useState } from 'react'

import { useRecoilState } from 'recoil'
import { allProductState, setCountState, setCartState} from '../recoil/atoms'
import { Heart } from 'phosphor-react';
import ShowAllProducts from '../components/allproducts';


export default function Shop() {
  
  return (
    <div className='flex p-9 flex-wrap space-x-10'>
     <ShowAllProducts/>
    </div>
  )
}
