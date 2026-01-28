import { useSelector } from "react-redux"
const AddtoCart=()=>{
  const selector=useSelector((state)=>state.cart.value)
console.log(selector)


    return(
<div className="cart-item">
  <img src="https://via.placeholder.com/100" alt="Product" className="cart-img"/>

  <div className="cart-details">
    <h4 className="product-name">Wireless Headphones</h4>
    <p className="product-desc">Black | Noise Cancellation</p>
    <p className="product-price">₹2,499</p>
  </div>
  </div>
    )
}
export default AddtoCart;