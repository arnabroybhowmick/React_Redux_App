import { useEffect } from "react";
import { fetchProduct } from "./redux/ProductSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Product_API=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
dispatch(fetchProduct())
    },[])
    const productSelector=useSelector((state)=>state.products.items);
    console.log(productSelector);
    return(
         <div className="grid">
            {
                productSelector.length && productSelector.map((item)=>{
                    <div className="card">
                        <img src={item.thumbnail}></img>
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="brand">{item.brand}</div>
                            <div className="price">{item.price}</div>
                            <div className="rating">{item.rating}</div>
                            <button className="btn">Add To Cart</button>
                    </div>
                    </div>
                })
            }
        </div>
        
    )
}