import React from 'react'
import "./Order.css"
import OrderCard from './OrderCard';

function Order() {

  const orderStatus = [
    {  label: "On The Way ", value: "on_the_way" },
    {  label: "Delivered ", value: "delivered" },
    {  label: "Cancelled ", value: "cancelled" },
    {  label: "Returned ", value: "returned" },
  ];



  return (
    <div className='px-5 lg:px-10' >
      <div  className='MainOrder text-black items-start mt-5' >
           <div className=" flex  flex-col items-start h-auto shadow-lg bg-white p-5 sticky top-5   text-black ">
              <h1  className='font-bold text-lg'>Filter</h1>
              <div className="space-y-4 mt-10">
                <h1 className="font-semibold mb-5">Order Status</h1>
                 {orderStatus.map((option)=>
                      <div className="flex items-center">
                      <input type="checkbox" defaultValue={option.value}  className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                      <label className='text-sm text-black ml-3'   htmlFor={option.value}>
                        {option.label}
                      </label>
                  </div>
                 )}
              </div>
           </div>
           <div className="mainOrderRight space-y-5  ">
            {
              [1,1,1,1,1,1].map((item)=>  <OrderCard/> )
            }
             
             
           </div>
      </div>

    </div>
  )
}

export default Order