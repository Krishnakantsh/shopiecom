import { api } from "../../Config/ApiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";


const jwt = localStorage.getItem("jwt");


// GET CART BY USER JWT  ......................................................................

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get("/api/cart" , {
      headers:{
        "Authorization": `Bearer ${jwt}`
      }
    } );
   
    dispatch({ type: GET_CART_SUCCESS, payload: data });

    console.log(" cart data : ", data)
    
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};

//  METHOD FOR ADD ITEM TO CART ...........................................................

export const addItemToCart = (reqData) => async (dispatch) => {

  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  console.log("item data that is add to act : ",reqData.pid)
  console.log("item data that is add to act : ",reqData.size)
  console.log("item data that is add to jwt : ",jwt)
  try {
    const { data } = await api.post("/api/addtocart/add",reqData,{
      headers:{
        "Authorization": `Bearer ${jwt}`
      }
    });

    console.log(" added item : ", data)

    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });


  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

// Method for update cart item .............................................................

export const updateItemToCart = ( reqData ) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
     console.log("reqdata : for update cartitem : ",reqData.data)
  try {
    const { data } = await api.put(
      `/api/cartItemsId/${reqData.cartItemId}`,
      reqData.data
      
    );

    console.log("Updated cart item ",data)
    
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};

//  method for remove cart item ............................................................

export const removeItemToCart = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  console.log("removable item id : ",cartItemId)
  try {
    const { data } = await api.delete(`/api/removeCartItem/${cartItemId}`);
    
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
    
    console.log("Removed cartitem id  : ",data)
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
  }
};
