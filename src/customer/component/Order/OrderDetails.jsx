import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function OrderDetails() {
  return (
    <div className="flex flex-col  px-5 lg:px-10 mt-10 text-left">
      <div className="shadow-md p-5"   >
        <h1 className="font-bold text-xl py-7 text-black">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="w-full my-16 shadow-md py-5  ">
        <OrderTracker activeStep={3} />
      </div>
      <div className="flex flex-col items-start w-full">

        { [1,1,1,1,1,1].map((item)=>

         <div  className="flex shadow-lg items-center justify-between w-full mb-5 lg:px-20 py-6" >
       <div className="flex ">
         <img
           className="w-[6rem] h-[8rem] object-cover object-top"
           src="https://i.pinimg.com/736x/de/40/34/de4034f6d923ab77efd572526ddad90c.jpg"
           alt=""
         />
         <div className="space-y-2 ml-10 text-black">
           <p className="font-semibold " > Mens slim mid rise black Hoody</p>
           <p className="space-x-5 opacity-50 text-xs font-semibold">
             <span>Color: Light Black </span> <span>Size: M</span>{" "}
           </p>
           <p>Seller:Lineria</p>
           <p>₹ 1099</p>
         </div>
       </div>
       <div className="text-black">
         <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
         <span>Rate & Review Product </span>
       </div>
     </div>
)
        
}


      </div>
    </div>
  );
}

export default OrderDetails;
