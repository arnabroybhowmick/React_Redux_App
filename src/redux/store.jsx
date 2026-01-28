import cartReducer from './Slice.jsx'
import productReducer from './ProductSlice.jsx'
const { configure, configureStore } = require("@reduxjs/toolkit");



const Store=configureStore({
    reducer:{cart:cartReducer,
        product:productReducer
    }
    
})
export default Store;