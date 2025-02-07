import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";


function HomeSectionCarousel({data , sectionName}) {
 const [activeIndex , setActiveIndex] =useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.3 },
  };



const slidePrev = () => {

  setActiveIndex(activeIndex-1);

}

const slideNext =()=>{

  setActiveIndex(activeIndex+1);

}

const syncActiveIndex =({item})=>setActiveIndex(item);


  const items = data.slice(0,15).map((item) => (
    <HomeSectionCard  product={item} />
  ));


  return (
    <div className="border">
       <h2 className="text-2xl font-extrabold text-left text-gray-800 py-5 pl-14" >{sectionName}</h2>
      <div className="relative p-5 ">

        <AliceCarousel
          key={activeIndex}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
        />

   <Button
        onClick={slideNext}
        disabled={activeIndex === items.length - 5}
        variant="contained"
        className="z-50 bg-dark hover:bg-blue-300"
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="next"

        
      >  
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>
      
      <Button

          disabled={activeIndex === 0}
          variant="contained"
          className="z-50 bg-dark hover:bg-blue-300"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
          onClick={slidePrev}
        
        >
          <KeyboardArrowRightIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
        
      </div>




    </div>
  );
}

export default HomeSectionCarousel;
