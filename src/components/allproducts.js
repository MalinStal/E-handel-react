import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { allProductState, productInHeartState, setCartState } from '../recoil/atoms'
import { Heart } from 'phosphor-react';
import { Link } from 'react-router-dom'
import { addToCart, isItemInCart,removeFromCart,addToHeart, isItemInHeart, removeFromHeart } from '../utils/constant';

export default function ShowAllProducts() {

  const allProducts = useRecoilValue(allProductState)
  const [inCart, setInCart] = useRecoilState(setCartState);
  const [inHeart, setInHeart] = useRecoilState(productInHeartState);


  return (
    <>
      {allProducts.map((item, index) => {
        return (

          <div className='flex flex-col mb-9 bg-teal-200 p-9 align-center rounded-xl max-w-sm ml-10' key={item.id}>
            <Link to={`./produkt/${index}`}>
              <h2>{item.title}</h2>
              <img className="w-42 h-42" src={item.thumbnail} />
              <span>{item.description}</span>
              <span> $ {item.price}</span>
            </Link>

            {isItemInCart(inCart, item) ?
              (<button onClick={() => { addToCart(setInCart, [...inCart, { product: item, price: item.price, amount: 1 }]) }} className='bg-white rounded-xl w-32 hover:bg-blue-100'>add to cart</button>)
              : (<button onClick={() => { removeFromCart(setInCart, item) }} className='bg-white rounded-xl w-36 hover:bg-blue-100'>Remove from cart</button>)}
            {isItemInHeart(inHeart, item) ? (<Heart onClick={() => { addToHeart(setInHeart, [...inHeart, { product: item }]) }} className='hover:text-red-500' size={35} />) :
              (<Heart onClick={() => { removeFromHeart(setInHeart, item) }} className='text-red-500' size={35} />)}
          </div>
        )
      })
      }
    </>
  )
}
