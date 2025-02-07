import React from "react";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItemToCart, updateItemToCart } from "../../../StateRedux/Cart/Action";

function CartItem({item}) {
 const dispatch = useDispatch();

const handleUpdateCartItem = (num) =>{
    

  const data = { 
    data:{
      quantity:item.quantity+num
    },
     cartItemId:item.id}
     console.log("dattta : ",data)
  dispatch(updateItemToCart(data))
} 


const handleRemoveCartItem =()=>{

dispatch(removeItemToCart(item.id))


}

const {cart} =useSelector(store=>store)

  return (
    <div className="p-5 shadow-lg border rounded-md mb-3">
      <div className=" flex items-center">
        <div className=" w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img   className="h-full w-full object-cover object-top rounded-sm"
            src={item.products?.imageurl}
            alt="tshirt image"
          />
        </div>

        <div className="ml-5 space-y-1 text-left">
          <p className="font-semibold">{item.products?.pname} </p>
          <p className="opacity-70"> Size : {item.size}, White </p>
          <p className="opacity-70 mt-2">Brand : {item.products?.brand}</p>

          <div className="flex space-x-5 items-center text-gray-900 mt-5 pt-6 ">
            <p className="font-semibold"> ₹  {item.discountedPrice} </p>
            <p className="opacity-50 line-through"> ₹ {item.price } </p>
            <p className="text-green-600 font-semibold "> {item.products?.discountPercent}% off </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{color:"rgb(145,85,253)"}} onClick={()=> handleUpdateCartItem(-1)}   disabled={item.products?.quantity <= 1 }  >
            <RemoveCircleOutlineIcon  />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
            <IconButton  sx={{color:"rgb(145,85,253)"}} onClick={()=> handleUpdateCartItem(1)}   >
              <AddCircleOutlineIcon />
            </IconButton>
         
        </div>
        <div>
          <Button onClick={handleRemoveCartItem}     sx={{color:"rgb(255,0,0)"}}  >Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
