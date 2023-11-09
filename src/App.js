import React, {useEffect}from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Produkt from "./pages/produkt";
import SavedProdukts from "./pages/productsInHeart";
import { useRecoilState } from "recoil";
import { allProductState} from "./recoil/atoms";
import { getAllProdukts} from "./API/fetch";


function App() {
 
  const [allProducts, setAllProducts] = useRecoilState(allProductState);

  useEffect(()=> {
     getAllProdukts().then((result) => setAllProducts(result.products));
     
  }, []);

  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/produkt/:Id" element={<Produkt/>} />
      <Route path="/lovely" element={<SavedProdukts/>}/>
      <Route path="/lovely/produkt/:Id" element={<Produkt/>} />
     </Routes>

     
    </div>
  );
}

export default App;
