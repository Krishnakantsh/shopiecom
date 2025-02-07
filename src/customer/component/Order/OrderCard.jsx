import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
 
  const navigate = useNavigate();



  return (
    <div  onClick={()=> navigate(`/account/order/${5}`)}     >
          <div    className='flex items-center justify-between shadow-lg hover:shadow-2xl rounded-lg mx-5 lg:pr-10 mb-2' >
            <div className='flex '>
                <div className='flex cursor-pointer'  >
                   <img className='h-[8rem] w-[6rem] object-cover object-top rounded-sm' src="https://i.pinimg.com/736x/e3/19/f4/e319f4ec426ba15e6917b9ca701fb4db.jpg" alt="" />
                </div>
                <div className='ml-5  flex flex-col text-left space-y-3' >
                      <p>Nike popular brand shoes</p>
                      <p   className='opacity-50 text-xs font-semibold'  >Size : m</p>
                      <p className='opacity-50 text-xs font-semibold'  > Color : Black</p>
                </div>
            </div>
            <div className='flex items-center justify-center '>
               <p>₹1999</p>
            </div>
            <div>
               { true &&   <div>
                <p>
                <AdjustIcon  sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'  />
                <span className='text-bold text-lg' >  Delivered on March 03 </span>
                </p> 
                <p className='text-xs' >Your item has been delivered.</p>
                     
               </div>  }
                {false &&  <p>
                  <AdjustIcon  sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'  />
                  <span>Expected Delivered on March 03 </span>
                </p>}
            </div>
          </div>
    </div>
  )
}

export default OrderCard