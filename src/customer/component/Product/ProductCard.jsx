import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productt }) => {

 const navigate = useNavigate();



  return (
    <div  onClick={()=> navigate(`/product/${productt.pid}`)}   className="productCard w-[15rem] shadow-md lg:rounded-sm  h-[25rem] m-4 transition-all cursor-pointer mx-12">
      <div className="h-[20rem] w-full   z-20">
        <img src={productt.imageurl} alt=""  className="h-full w-full object-left-top object-cover"  />
      </div>

      <div className=" textPart bg-white p-3 ">
        <div className="flex flex-col text-left">
          <p className="font-bold opacity-60 text-black">{productt.brand}</p>
          <p className=" text-black">{productt.pname}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-semibold text-black">₹ {productt.price} </p>
          <p className="line-through text-black opacity-50">
            ₹ {productt.discountedPrice}
          </p>
          <p className="text-green-600 font-semibold">
            {productt.discountPercent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
