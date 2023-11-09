
export const addToCart = (setInCart,product) => {
  setInCart(product)
} 



export const isItemInCart = (inCart, product) => {
  for (let item of inCart) {
    if (item.product === product) {
      return false;
    }
  }

  return true;
};
//filter kollar om ett objekt finns i listan och ger tillbaka en ny lista utan det valda objektet
export const removeFromCart = (setInCart, product) => {

  setInCart(inCart => { return inCart.filter(item => item.product !== product) })
}
//läger till produkt inHeart
export const addToHeart = (setInHeart, product) => {
  setInHeart(product)
}
//kollar om produkten finns inHeart arrayen
export const isItemInHeart = (inHeart, product) => {
  for (let item of inHeart) {
    if (item.product === product) {
      return false;
    }
  }
  return true;
};
export const removeFromHeart = (setInHeart, product) => {

  setInHeart(inHeart => { return inHeart.filter(item => item.product !== product) })
}