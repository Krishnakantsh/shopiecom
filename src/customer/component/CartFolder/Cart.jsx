import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../StateRedux/Cart/Action";
import { store } from "../../../StateRedux/Store";

function Cart() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {cart} = useSelector(store=>store)

  const handleCheckOut = () => {
    navigate("/checkout?step=2")
  }

  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem , cart.deleteCartItem])

  return (

    
    <div>
      <div className="text-lg text-black lg:grid grid-cols-3 lg:px-16 relative mt-5 ">
        <div className="col-span-2">
         {cart.cart?.cartItems.map((item)=>  <CartItem   item={item}   /> ) } 
        </div>


        <div className="px-5 sticky top-0 mt-5 lg:mt-0 h-[100vh] ">
          <div className="border flex flex-col items-start p-3">

            <p className=" uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold w-full mb-10">
              <div className="flex justify-between pt-3 text-black">
                 <span className="opacity-60" >Price</span>
                 <span>₹{cart.cart?.totalprice }</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                 <span className="opacity-60" >Discount</span>
                 <span className="text-green-600"  >₹{cart.cart?.discount }</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                 <span className="opacity-60" >Delivery Charge</span>
                 <span className="text-green-600"  >Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                 <span>Total Amount</span>
                 <span className="text-green-600"   >₹{cart.cart?.totaldiscount }</span>
              </div>
            </div>

            <Button type="submit" onClick={handleCheckOut}  className="w-full "  variant="contained" sx={{px:"2.5rem" , py:"0.7rem" , bgcolor:"#9155fd"}} >Checkout </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
