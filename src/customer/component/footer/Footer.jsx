import { Button } from "@headlessui/react";
import { Grid2, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className="" >
      <Grid2
        className="bg-white  text-white text-center my-10   " container
        sx={{ bgcolor: "black", color: "white", py: 3  ,justifyContent: "space-around",
          alignItems: "flex-start"  }}
      >
        <Grid2 item xs={12} sm={6} md={3}  sx={{ textAlign:"start" }} >
          <div>
            <Typography className="pb-5" variant="h6">
             Company
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              ABOUT
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
             BLOG
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              PRESS
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              JOBS
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              PARTNERS
            </Button>
          </div>
     
        </Grid2>

        <Grid2 item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Solutions
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              MARKETING
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              ANALYTICS
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
             COMMERCE
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              INSIGHTS
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
               SUPPORTS
            </Button>
          </div>
        </Grid2>


        <Grid2 item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6 " gutterbottom="true">
              Company
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
             Api Status
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              Become Saler
            </Button>
          </div>
         
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3}   sx={{ textAlign:"end" }}  >
          <div>
            <Typography className="pb-5" variant="h6" gutterbottom="true">
              legel
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true" >
              CLAIM
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              PRIVACY
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              TERMA & CONDITIONS
            </Button>
          </div>
         
        </Grid2>
        <Grid2>
          
        </Grid2>



      </Grid2>
    </div>
  );
}

export default Footer;
