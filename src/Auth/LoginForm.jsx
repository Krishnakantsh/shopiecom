import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { getUser, login } from '../StateRedux/Auth/Action';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, login } from '../StateRedux/Auth/Action';

function LoginForm() {

const navigate = useNavigate();

const dispatch = useDispatch();

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
    username:data.get("email"),
    password:data.get("password"),
  }
    dispatch(login(userData));
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
          
           <div className="flex full flex-col  ">
             

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

                 Login
                 </Button>
               </div>

           </div>
           


        </form>

             <div  className='flex flex-col justify-center items-center'  >
                  <div  className='py-3 flex items-center' >
                    <p>If you don't have account ? </p>
                    <Button onClick={()=> navigate("/register")}  className='ml-5 ' size='small' >Register</Button>
                  </div>
                 </div>


    </div>
  )
}

export default LoginForm