import React from 'react'
import { ShoppingCart, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex bg-teal-400 '>
        <Link to="/"> <h1 className='text-4xl hover:bg-blue-400'>My Store</h1></Link>
       <Link to="/lovely">< Heart size={42}  className='ms-20 text-red-500'  /></Link> 
        <Link to="/cart"> <ShoppingCart size={42}/></Link>
      
     
    </div>
  )
}
