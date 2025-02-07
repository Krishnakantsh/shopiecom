import React from 'react'

function AddressCard({address}) {
  return (
    <div>
   
    <div className='space-y-3 flex flex-col items-start text-black'   >

        {/* <p  className='font-semibold' >{address.firstName +" "+ address.lastName}</p> */}
        {/* <p>{address.streetAddress}, {address.city}, {address.country}, {address.pincode}</p> */}
       <div  className='space-y-1 pl-0 text-left' >
        <p  className='font-semibold'>Phone Number</p>
        {/* <p >+91-{address.contact}</p> */}
       </div>
    </div>


    </div>
  )
}

export default AddressCard