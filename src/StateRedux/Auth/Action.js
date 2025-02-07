
//  SIGN UP METHOD 

import axios from "axios"
import { API_BASED_URL } from "../../Config/ApiConfig"
import { REGISTER_REQUEST,  GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_SUCCESS } from "./ActionType";



const registerRequest = () =>({type:REGISTER_REQUEST});
const registerSuccess = (user)=>({type:REGISTER_SUCCESS, payload:user});
const registerFailure = (error)=>({type:REGISTER_FAILURE, payload:error});


//  register  ...........................................................  



export const register = ( userData ) => async (dispatch) => {
  
  dispatch(registerRequest());

  try {
    const response = await axios.post( `${ API_BASED_URL }/auth/signup`, userData )

    const user = response.data;

    // console.log("signup user details : " , user);

    if( user.jwt ){
      localStorage.setItem("jwt" , user.jwt )
    }

    dispatch(registerSuccess(user.jwt))
   
  } catch (error) {
    dispatch(registerFailure(error.message))
    console.log("There is some error occured ")
    console.log(error.message)
  }

}


const loginRequest = ()=>({type:LOGIN_REQUEST});
const loginSuccess = (user)=>({type:LOGIN_SUCCESS, payload:user});
const loginFailure = (error)=>({type:LOGIN_FAILURE, payload:error});

//  Login  ...........................................................  

export const login = (userData) => async (dispatch) => {
  
  dispatch(loginRequest());

  try {
    const response = await axios.post( `${ API_BASED_URL }/auth/signin`, userData )

    const user = response.data;

    if( user.jwt ){
      localStorage.setItem("jwt" , user.jwt )
    }

    // console.log("login user data : " , user);
    
    dispatch(loginSuccess(user.jwt))
   
  } catch (error) {
    dispatch(loginFailure(error.message))
  }

}




//  GET USER  ...........................................................  

const token = localStorage.getItem("jwt");

const getUserRequest = ()=>({type:GET_USER_REQUEST});
const getUserSuccess = (user)=>({type:GET_USER_SUCCESS, payload:user});
const getUserFailure = (error)=>({type:GET_USER_FAILURE, payload:error});


export const getUser = (jwt) => async (dispatch) => {
  
  dispatch(getUserRequest());

  try {
    const response = await axios.get( `${ API_BASED_URL }/auth/user/profile`,{
      headers:{
        "Authorization": `Bearer ${jwt}`
      }
    }
     )
    const user = response.data;

    // console.log("user2 : ", user);
    
    dispatch(getUserSuccess(user))
   
  } catch (error) {
    dispatch(getUserFailure(error.message))
  }

}

//   logout system  method ......................................................

export const logout = () => (dispatch) => {
   dispatch({type:LOGOUT, payload:null})
}