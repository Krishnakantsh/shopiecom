import React from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummery from './OrderSummery';


const steps = ['Login' , 'Add Delivery Address', 'Order Summery', 'Payment'];

 function Checkout() {
  
  const [activeStep, setActiveStep] = React.useState(0);

  const location = useLocation();

  const querySearch = new URLSearchParams(location.search);

  const step = querySearch.get("step");

console.log("current step : ", step)

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (


    

    <div className='px-10 lg:px-20  lg:mt-16' >
    <Box sx={{ width: '100%' }}>


      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps={};
          const labelProps={};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>



      {activeStep === steps.length ? (
        <React.Fragment>

         
        </React.Fragment>
      ) : (
        <React.Fragment>


          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
      
          </Box>
          
          <div>
            { step == 2 ? <DeliveryAddressForm/> : <OrderSummery/>  }
          </div>


        </React.Fragment>

        
      )}
    </Box>

    </div>
  );
}


export default Checkout