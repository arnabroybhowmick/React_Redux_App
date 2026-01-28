import AddToCart from './AddToCart.jsx';
import Product from './Product.jsx';
import './App.css';
const Header=()=>{
    return(
        <>
    <header className="navbar">
  <div className="logo">MyShop</div>
  <nav>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <AddToCart/>
  </nav>
  <div className="cart">
    <span className="cart-count">2</span>
  </div>
</header>
<Product/>


</>
    )
}
export default Header;