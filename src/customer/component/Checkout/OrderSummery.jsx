import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from "@mui/material";
import CartItem from '../CartFolder/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../StateRedux/Order/Action';
import { createPayment } from '../../../StateRedux/Payment/Action';


function OrderSummery() {

 const dispatch = useDispatch();
 const location = useLocation();
 const {order}  =  useSelector(store=>store)
 const searchParams =new URLSearchParams(location.search);
 const orderid = searchParams.get("order_id");

console.log("order : ",order.order)

useEffect(()=>{
  dispatch(getOrderById(orderid));
}, [orderid])


const handleCheckOut=()=>{
 
  dispatch(createPayment(orderid));



}




  return (
    <div  className='text-black' >
       <div className="p-5 shadow-lg rounded-s-md border">
           <AddressCard   address={order.order?.shippingAddress} />
       </div>

       <div>
      <div className="text-lg text-black lg:grid grid-cols-3  relative mt-5 ">
        <div className="col-span-2">
         {order.order?.orderitems.map((item)=>  <CartItem   item={item} /> ) } 
        </div>


        <div className="px-5 sticky top-0 mt-5 lg:mt-0 h-[100vh] ">
          <div className="border flex flex-col items-start p-3">

            <p className=" uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold w-full mb-10">
              <div className="flex justify-between pt-3 text-black">
                 <span className="opacity-60" >Price</span>
                 <span>₹{order.order?.totalprice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                 <span className="opacity-60" >Discount</span>
                 <span className="text-green-600"  >₹{order.order?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                 <span className="opacity-60" >Delivery Charge</span>
                 <span className="text-green-600"  >Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                 <span>Total Price</span>
                 <span className="text-green-600"   >₹{order.order?.totalDiscountPrice}</span>
              </div>
            </div>

            <Button className="w-full "   onClick={handleCheckOut}   variant="contained" sx={{ px:"2.5rem" , py:"0.7rem" , bgcolor:"#9155fd" }} >Checkout </Button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default OrderSummery