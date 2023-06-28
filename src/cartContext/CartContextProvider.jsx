import CartContext from "./CartContext";
import { useState } from "react";

const CartContextProvider = (props) => {
    const [cartITEMS, setCartITEMS] = useState([]);
    const ctxValue = {
        cartItems: cartITEMS,
        noOfCartItems: function(){return this.cartItems.length},
        totalAmount: ()=>{
            let total=0;
          cartITEMS.forEach((item)=>{
            total += parseInt(item.price)*item.quantity;
          })
          return total;
        },
        addToCart: (item)=>{
            setCartITEMS((prev)=>{
              let f = 0;
              let updatedItem =  prev.map((ITEM)=>{
                    if(item.title===ITEM.title){
                        f = 1;
                        return {...ITEM, quantity:ITEM.quantity+1}
                    }else{
                        return ITEM;
                    }
                })
                if(f===0){
                    return [...prev, {...item,quantity:1}];
                }else{
                    return updatedItem;
                }
            })
        },
        removeFromCart: (item)=>{
            setCartITEMS((prev)=>{
                // return prev.filter((ITEM)=>{
                //     return item.title!=ITEM.title;
                // })
                return prev.map((ITEM)=>{
                    if(item.title===ITEM.title){
                        if(ITEM.quantity>0){
                            return {...ITEM, quantity:ITEM.quantity-1}
                        }else{
                            return ITEM;
                        }
                    }else{
                        return ITEM;
                    }

                })
            })
            setCartITEMS((prev)=>{
                return prev.filter((ITEM)=>{
                    return ITEM.quantity!=0;
                })
            })
        }
    }
    return <>
        <CartContext.Provider value={ctxValue}>
            {props.children}
        </CartContext.Provider>
    </>
}

export default CartContextProvider;