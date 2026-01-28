import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

const addToCart=createSlice({
    name:'cart',
    initialState,
    reducers:{
        additem:(state)=>{
            state.value+=1
        },
        clearAllItem:(state)=>{
            state.value=0
        },
        removeitem:(state)=>{
            if(state.value>0 )
            {
                state.value-=1
            }
        }
    }
})

export const {additem,clearAllItem,removeitem}=addToCart.actions;
export default addToCart.reducer;