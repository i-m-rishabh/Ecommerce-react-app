import { UserContext } from "../Auth/userContext/UserContext";
import CartContext from "./CartContext";
import { useContext, useEffect, useState } from "react";

const CartContextProvider = (props) => {
    const userCtx = useContext(UserContext);
    const cart = JSON.parse(localStorage.getItem("cart"));

    const [cartITEMS, setCartITEMS] = useState(cart || []);
    useEffect(()=>{
        fetch(`https://react-ecommerce-af4e6-default-rtdb.firebaseio.com/users/${userCtx.localId}.json`,{
            method: "POST",
            body: JSON.stringify({cart:cartITEMS}),
            headers:{
                'Content-Type':'application/json',
            }
        }).then(res=>{
            if(res.ok){
                localStorage.setItem("cart",JSON.stringify(cartITEMS));
                console.log("cart database updated");
            }else{
                console.log("error in updating cart database");
            }
        }).catch(err=>{console.log(err)})
    },[cartITEMS,userCtx.localId])

    

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
        setCart: (cart)=>{
            if(cart){
                setCartITEMS(cart);
            }
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
                    return ITEM.quantity!==0;
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