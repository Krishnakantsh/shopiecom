import { useDispatch } from "react-redux";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";
import { api } from "../../Config/ApiConfig";


// for find all products

export const findProducts = ( reqData ) => async (dispatch) => {
  
  dispatch({type:FIND_PRODUCT_REQUEST})


  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {

  const {data} = await api.get(`/api/products?category=${category}&color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
 
  
  //  console.log(data);
  // we need to add this into the reducer
  
  dispatch({type:FIND_PRODUCT_SUCCESS, payload:data})


  } catch (error) {
   
    // when some error occured then 

    dispatch({type:FIND_PRODUCT_FAILURE, payload:error.message})

  }

};



// find product by id



export const findProdutById = (reqData) => async (dispatch) => {
  
  dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})



  try {
  
    const {productid} = reqData;

  const {data} = await api.get(`/api/products/${productid}`)

  console.log("Your product : ", data)
  // we need to add this into the reducer
  
  dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})


  } catch (error) {
   
    // when some error occured then 

    dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})

  }

};






