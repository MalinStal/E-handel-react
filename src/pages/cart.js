import React from 'react'
import { setCartState } from '../recoil/atoms'
import { useRecoilState } from 'recoil'

export default function Cart() {
  const [inCart, setInCart] = useRecoilState(setCartState)

  
  const increaseAmount = (item) => {
    // om någon item matchar vad som är i listan(all) updateras in cart. amount med 1 
     setInCart(
      inCart.map((all) => {
        if (all === item) {
          return { ...item, price: item.product.price + item.product.price * item.amount, amount: item.amount + 1 };
        } else {
          return all;
        }
      }),

    ); 

  }
  //om item(som är själva objektet med produkten och dess amont) är 1 så kommer produkten tas bort från inCart listan
  //annars kommer amount dras av med 1 för varje klick; 
  const decreaseAmount = (item) => {
    if(item.amount ===1) {
      setInCart(inCart.filter((all) => all !== item));
    } else{
      setInCart(inCart.map((all) => {
        if(all === item){
          return {...item, price: item.price - item.product.price, amount:item.amount -1};
        } else{
          return all
        }
      }))
    }
   
  }
  const totalPrice= () => {
    inCart.map(all => {
      return all.price
    })
  }
  const total = inCart.reduce((accum,item) => accum + item.price, 0)
 
  return (
    <div className='flex flex-col items-center'>
      {inCart.map(item => {
        return (
          <div className='flex m-1'>
            <div className='text-xl p-5'> title {item.product.title} pris $ {item.price} </div>
            <div className=''>      
              <button onClick={() => {increaseAmount(item)}} className='p-1 bg-blue-400 rounded-full m-1 '> + </button>
              <span className='text-xl p-5'>{item.amount}</span>
              <button onClick={() => decreaseAmount(item)} className='p-1 bg-blue-400 rounded-full m-1 '> - </button>
              </div>
      
          </div>)
      })}
      <div className='flex flex-col'>
        <span className='text-xl pb-3'>total pris: $ {total}</span>
        <button className='bg-blue-500 w-32 rounded-full'>till kassan</button>
      </div>
    </div>
  )
}
