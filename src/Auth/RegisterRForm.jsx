import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { store } from '../StateRedux/Store';
import { getUser , register } from '../StateRedux/Auth/Action';



function RegisterRForm() {

// this is used when we want to redirect in another page 
const navigate = useNavigate();

// this is used for sign form dispatch to the reducer

const dispatch = useDispatch();

//  use useEffect hook for get user by using jwt

const jwt = localStorage.getItem("jwt");

const { auth } = useSelector(store => store)

useEffect(()=>{

  if(jwt){
    dispatch(getUser(jwt));
  }
},[jwt, auth.jwt])


const handleSubmit = ( event) =>{
  
  event.preventDefault()

  const data = new FormData(event.currentTarget);

  const userData = {
    firstName:data.get("firstName"),
    lastName:data.get("lastName"),
    email:data.get("email"),
    password:data.get("password"),
  }
  
  dispatch(register(userData));

  console.log("userData  : ", userData);
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
          
           <div className="flex full flex-col  ">
               <div className="flex w-full items-center justify-center gap-3 mb-5 ">
                <TextField
                fullWidth
                autoComplete='given-name'
                id='firstName'
                required
                label="First Name"
                name='firstName'           
                />
                 <TextField
                fullWidth
                autoComplete='given-name'
                id='lastName'
                required
                label="Last Name"
                name='lastName'           
                />

               </div>

               <div className="flex w-full items-center justify-center gap-3 mb-5">
                <TextField
                fullWidth
                autoComplete='email'
                id='email'
                required
                label="Email"
                name='email'           
                />
               </div>
               <div className="flex w-full items-center justify-center gap-3 mb-5 ">
                <TextField
                fullWidth
                autoComplete='password'
                id='password'
                required
                label="password"
                name='password'           
                />
               </div>

               <div className="flex w-full items-center justify-center gap-3 mb-5 ">
                 <Button
                  className='bg-[rgb(23,141,241)]   w-full '
                  type='submit'
                  variant='contained'
                  size='large'
                  sx={{ padding:"0.8rem 0"      }}
                 >
                  Register
                 </Button>
               </div>

           </div>
           


        </form>
       
       <div  className='flex flex-col justify-center items-center'  >
        <div  className='py-3 flex items-center' >
          <p>If you have already account ? </p>
          <Button onClick={()=> navigate("/login")}  className='ml-5 ' size='small' >Login</Button>
        </div>
       </div>


    </div>
  )
}

export default RegisterRForm