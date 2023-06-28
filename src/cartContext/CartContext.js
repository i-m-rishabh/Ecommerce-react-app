import { createContext } from "react";

const CartContext = createContext({
    cartItems:[],
    noOfCartItems: function(){},
    addToCart: ()=>{},
    totalAmount: ()=>{},
    removeFromCart: ()=>{}
})

export default CartContext;
