import React from 'react'
import { productInHeartState } from '../recoil/atoms'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { Heart } from 'phosphor-react'

export default function ProductsInHeart() {
  
 
  const [inHeart, setInHeart] = useRecoilState(productInHeartState);

  return (
    <div>
      {inHeart.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`./produkt/${index}`}>
            <h2>{item.product.title}</h2>
            <img src={item.product.thumbnail} className='w-64'/>
            <span>{item.product.price}</span>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
