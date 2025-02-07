

import axios from "axios";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";
import { api, API_BASED_URL } from "../../Config/ApiConfig";


const jwt = localStorage.getItem("jwt");

//  CREATE ORDER METHOD  .....................................................................................


export const createOrder = (reqData) => async (dispatch)=>{


dispatch({type:CREATE_ORDER_REQUEST});


try {
  
   const {data} = await api.post(
    `/api/order/createOrder`,
    reqData.address,
   );

   console.log("created order id: ", data.id)

  reqData.navigate(`/checkout?step=3&order_id=${data.id}`);

   

   dispatch({type:CREATE_ORDER_SUCCESS , payload:data});

} catch (error) {
  console.log("catched error : ", error);
  dispatch({
    type:CREATE_ORDER_FAILURE, payload: error.message
  });
  
}
};




//  get order by id ...................................................................................


export const getOrderById = (orderid) => async (dispatch)=>{


  dispatch({type:GET_ORDER_BY_ID_REQUEST});
  
  try {
    
  
  
     const {data} = await api.get(
      `/api/order/${orderid}`,{
        headers:{
          "Authorization": `Bearer ${jwt}`
        }
      } 
     );
   
     console.log("order by id  : ", data)
  
     dispatch({type:GET_ORDER_BY_ID_SUCCESS , payload:data});
  
  } catch (error) {
    console.log("catched error : ", error);
    dispatch({
      type:GET_ORDER_BY_ID_FAILURE, payload: error.message
    });
    
  }
  };
  
