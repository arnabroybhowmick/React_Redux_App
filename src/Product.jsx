import { useDispatch, useSelector } from "react-redux";
import {AddtoCart,additem,removeitem} from "./redux/Slice";
import './App.css'
import { useEffect } from "react";

import { fetchProduct } from "./redux/ProductSlice";
const Product=()=>{
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(fetchProduct)
  },[])
  const selector=useSelector((state)=>state.products);
  console.log(selector)
  return(
<section className="products">
  <h2>Our Products</h2>

  <div className="product-grid">

    
    <div className="product-card">
      <img src="https://via.placeholder.com/200" alt="Product"/>
      <h3>Wireless Headphones</h3>
      <p className="price">₹2,499</p>
      <button onClick={()=>dispatch(additem(1))}>Add to Cart</button>
    </div >

    <div className="product-card">
      <img src="https://via.placeholder.com/200" alt="Product"/>
      <h3>Smart Watch</h3>
      <p className="price">₹3,999</p>
      <button onClick={()=>dispatch(additem(1))}>Add to Cart</button>
    </div >

    <div className="product-card">
      <img src="https://via.placeholder.com/200" alt="Product"/>
      <h3>Bluetooth Speaker</h3>
      <p className="price">₹1,799</p>
      <button onClick={()=>dispatch(additem(1))}>Add to Cart</button>
    </div >

    <div className="product-card">
      <img src="https://via.placeholder.com/200" alt="Product"/>
      <h3>Gaming Mouse</h3>
      <p className="price">₹999</p>
      <button onClick={()=>dispatch(additem(1))}>Add to Cart</button>
    </div >
<button onClick={()=>{dispatch(removeitem)}}>Remove Item</button>
  </div>

</section>)
}
export default Product;