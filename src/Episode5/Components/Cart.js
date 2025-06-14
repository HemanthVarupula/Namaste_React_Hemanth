import {  useDispatch, useSelector } from "react-redux"
import { ItemList } from "./ItemList"
import { clearCart } from "../util/cartSlice";

export const Cart=()=>{
     const CartItems=useSelector((store)=>store.cart.items)
     const dispatch=useDispatch();
   const handleClearCart=()=>{
    dispatch(clearCart());
    console.log("clear btn clicked")
   }
    return(
        <>
        <div className="cbtn"><button onClick={handleClearCart}>Clear Cart</button></div>
        <div className="cartbox">
             {CartItems.length === 0 ? (
                <h2>Your cart is empty.</h2>
            ) : (
                <ItemList items={CartItems} />
            )}
        </div>
        </>
    )
}