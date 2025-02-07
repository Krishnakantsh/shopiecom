import { api } from "../../Config/ApiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType"


//  Hndler for create payment .............................................


export const createPayment =(orderId)=> async(dispatch)=>{

 
 dispatch({type:CREATE_PAYMENT_REQUEST})


 try {

  const {data} = await api.post(`/api/payments/${orderId}`);

  if( data.payment_link_url)
  {
    window.location.href=data.payment_link_url

  }

  // dispatch({type:CREATE_PAYMENT_SUCCESS})
  
 } catch (error) {
   dispatch({type:CREATE_PAYMENT_FAILURE})
 }

}



// Handler for update paymnet status...................................

export const updatePaymentStatus =(reqData)=> async(dispatch)=>{

 
  dispatch({type:UPDATE_PAYMENT_REQUEST})
 
 
  try {
  console.log(" your payment page data : ",reqData)
   const {data} = await api.get(`/api/payments/updatation?payment_id=${reqData.paymentId}&order_id=${reqData.orderid}`);
 
  console.log("fetched data : ",data);

  //  dispatch({type:UPDATE_PAYMENT_SUCCESS})     it is used for show on frontend
   
  } catch (error) {
    dispatch({type:UPDATE_PAYMENT_FAILURE})
  }
 
 }
