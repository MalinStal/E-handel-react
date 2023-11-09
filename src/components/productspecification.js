import React from 'react'
import { allProductState, productInHeartState, setCartState } from '../recoil/atoms'
import { useRecoilValue, useRecoilState } from 'recoil'
import { Heart } from 'phosphor-react'
import { addToCart, isItemInCart,removeFromCart,addToHeart, isItemInHeart, removeFromHeart } from '../utils/constant';



export default function ProductSpecification({index}) {
  const products = useRecoilValue(allProductState)
  const [inCart, setInCart] = useRecoilState(setCartState);
  const [inHeart, setInHeart] = useRecoilState(productInHeartState);

 
  return (
   <section className='flex flex-col items-center justify-center mt-5 bg-blue-100 ml-10 mr-10 rounded-lg p-10'> 
      <div>
        <h1 className='font-sans text-xl '>{products[index]?.title}</h1>
        <img src={products[index]?.thumbnail} className='w-100' /> 
        <div className='flex'>{products[index]?.images.map((image, index) => {
        return <img key={index} src={image} className='w-20 ' />
      })}</div>
        <div> $ {products[index]?.price}</div>
          <div>{products[index]?.brand}</div>
          <div>{products[index]?.rating}</div>
      </div>
      {isItemInCart(inCart, products[index]) ?
              (<button onClick={() => { addToCart(setInCart, [...inCart, { product: products[index], price: products[index].price, amount: 1 }]) }} className='bg-white rounded-xl w-32 hover:bg-blue-100'>add to cart</button>)
              : (<button onClick={() => { removeFromCart(setInCart, products[index]) }} className='bg-white rounded-xl w-36 hover:bg-blue-100'>Remove from cart</button>)}
            {isItemInHeart(inHeart, products[index]) ? (<Heart onClick={() => { addToHeart(setInHeart, [...inHeart, { product: products[index] }]) }} className='hover:text-red-500' size={35} />) :
              (<Heart onClick={() => { removeFromHeart(setInHeart, products[index]) }} className='text-red-500' size={35} />)}
   </section>
  )
}
