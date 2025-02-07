import React from "react";
import { Box, Button, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { Grid2 } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../StateRedux/Order/Action";
import { useNavigate } from "react-router-dom";

function DeliveryAddressForm() {

const dispatch = useDispatch();
const navigate = useNavigate();  

const {cart} = useSelector(store=>store)

const handleSubmit=(e)=>{
  e.preventDefault();

   const data = new FormData(e.currentTarget);

   const address = {
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetAddress:data.get("address"),
      city:data.get("city"),
      country:data.get("state"),
      pincode:data.get("zip"),
      contact:data.get("phoneNumber")
   }
   
   const orderData = {address, navigate}

   dispatch(createOrder(orderData))

   console.log("form data ", orderData);

}



  return (
    <div className="text-black mt-10">
      <div className="flex justify-between gap-4 ">
        <div className=" w-2/5  min-h-[60vh] flex flex-col items-start justify-start  rounded-e-md shadow-md h-[30.5rem  overflow-y-scroll ">
          <div className="p-5 py-7 flex flex-col items-start w-full border-b cursor-pointer">
            <AddressCard address={cart.user?.address} />
            <Button
              sx={{ mt: 2, bgcolor: "rgb(145,85,253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </div>

        <div className="w-3/5">
          <Box className="border rounded-s-md shadow-md p-5 w-full">
            <form onSubmit={handleSubmit} className="w-full flex flex-wrap justify-between">
              <div className="flex flex-col w-full h-fit ">

                <div className=" flex justify-between gap-4 pb-10"  >
                  <TextField
                    className="w-2/4"
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    autoComplete="given-name"
                  />
               
                  <TextField
                    className="w-2/4"
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    autoComplete="given-name"
                  />
                </div>

                <div className=" flex justify-between gap-4 pb-10"  >
                  <TextField
                    className="w-full"
                    required
                    id="address"
                    name="address"
                    label="Address"
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
               
                
                </div>

                <div className=" flex justify-between gap-4 pb-10"  >
                  <TextField
                    className="w-2/4"
                    required
                    id="city"
                    name="city"
                    label="City "
                    autoComplete="given-name"
                  />
               
                  <TextField
                    className="w-2/4"
                    required
                    id="state"
                    name="state"
                    label="State/Provision/Region"
                    autoComplete="given-name"
                  />
                </div>

                <div className=" flex justify-between gap-4 pb-10"  >
                  <TextField
                    className="w-2/4"
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    autoComplete="shipping postal-code"
                  />
               
                  <TextField
                    className="w-2/4"
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    autoComplete="given-name"
                  />
                </div>



                <div className=" flex justify-between gap-4 pb-10"  >
                 <Button 
                 sx={{py:1.5, mt:2 , bgcolor:"rgb(145,85,253)"   }} 
                 className=""   
                 size="large" 
                 variant="contained"
                 type="submit"
                 >
                    Deliver Here
                 </Button>
      
               
                </div>
                


              </div>
             
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddressForm;
