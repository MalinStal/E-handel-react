import React from 'react'

import { useRecoilState } from 'recoil'
import { allProductState, productInHeartState, setCartState, setCountState } from '../recoil/atoms'
import { useParams } from 'react-router-dom';
import ProductSpecification from '../components/productspecification';


export default function Produkt() {
  const [count,setCount] = useRecoilState(setCountState);
  const [allProducts, setAllProducts] = useRecoilState(allProductState);
  const [inHeart, setInHeart] = useRecoilState(productInHeartState);
  const [inCart, setInCart] = useRecoilState(setCartState);
  const {Id} = useParams()

//använder useParams för att skicka indexet på produkten (vilken produkt ur listan) till denna komponent för att kunna välja
//vilken produkt som ska öppnas med productspecification. 

  return (
    <div>
     <ProductSpecification index={Id} />
    </div>
  )
}
