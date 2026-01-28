import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";

export const fetchProduct=createAsyncThunk('products',async()=>{
    const res=await fetch("https://dummyjson.com/products")
    const data=await res.json();
    return data.products;
})
const initialState={
    items:[],
    status:undefined,
    error:null
}
const productSlice=createSlice({
name:'product',
initialState,
extraReducers:(builder)=>{
builder.addCase(fetchProduct.fulfilled,(state,action)=>{
state.status="Successfull";
state.items=action.payload;
})
}
})

export default productSlice.reducer