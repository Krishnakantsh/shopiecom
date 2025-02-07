import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../../StateRedux/Order/Action'
import { updatePaymentStatus } from '../../../StateRedux/Payment/Action'
import { Alert, AlertTitle } from '@mui/material'
import OrderTracker from '../Order/OrderTracker'
import AddressCard from '../AddressCard/AddressCard'

function PaymentSuccessPage() {


  const [paymentId , setPaymentId] = useState()
  const [referenceId , setReferenceId] = useState()
  const [paymentStatus ,setPaymentStatus] = useState()

  const {orderid} = useParams();
  
  console.log("Your order id : ",orderid);


  const dispatch = useDispatch();

  const {order} = useSelector(store=> store);
  
  useEffect(()=>{

  const urlParam = new URLSearchParams(window.location.search);

  setPaymentId(urlParam.get("razorpay_payment_id"));
  setPaymentStatus(urlParam.get("razorpay_payment_link_status"));


  },[])

  useEffect(()=>{

    const data = {orderid , paymentId}
    
    dispatch(getOrderById(orderid));
    dispatch(updatePaymentStatus(data));

  },[paymentId, orderid])

  return (
    <div className='px-2 lg:px-36 w-full' >


             <div className="flex flex-col justify-center items-center lg:mt-10">
                <Alert variant='filled' security='success' sx={{mb:6 , width:"fit-content"}}  >
                    <AlertTitle>Payment Successful</AlertTitle>
                    Congretulations! Your order get placed
                </Alert>
              </div> 

              <OrderTracker  activeStep={1}  />  

           { order.order?.orderitems.map((item)=>   <div className=' py-5 pt-10 space-y-5 ' >
                    <div className=" flex shadow-xl rounded-md p-5   "  sx={{alignItems:"center" , justifyContent:"space-between"}}  >
                         <div className='w-1/2'>
                            <div className="flex items-center">
                              <img   className='w-[8rem] h-[8rem] object-cover object-top '   src={item.products.imageurl} alt="image" />
                              <div className='flex  flex-col justify-between text-left space-y-1 lg:ml-10 ' >
                                <p>{item.products.pname}</p>
                                <div   className=' opacity-50 text-xs font-semibold space-x-2' >  
                                  <span> { item.products.color} </span>,
                                  <span>  { item.size} </span>      
                                </div>
                                <p>{ item.products.brand}</p>
                                <p>{ item.products.brand}</p>
                                <p>₹ {item.price}</p>

                              </div>
                            </div>
                         </div>
                         <div  className='w-1/2  '   >
                          <p  className='text-lg font-semibold text-violet-900 border border-t-0 border-r-0 border-l-0 border-b-violet-900 pb-2' >Shipping Address</p>
                           <AddressCard    address={order.order?.shippingAddress}  />
                         </div>
                    </div>
          


              



              </div>  

             ) } 

    </div>
  )
}

export default PaymentSuccessPage