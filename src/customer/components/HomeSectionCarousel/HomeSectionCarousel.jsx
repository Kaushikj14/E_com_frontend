import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({data,sectionName}) => {

  const [activeIndex,setActiveIndex] = useState(0);


  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = ()=>{

    setActiveIndex(activeIndex-1);

  }

  const slideNext = () => setActiveIndex(activeIndex + 1); // ✅ Correct


  const syncAxtiveIndex = ({item})=>{setActiveIndex(item)}

  // const items = data.map((item) => <HomeSectionCard product={item} />);

  const items = [1, 1, 1, 1, 1,1, 1,1,1,1,].map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">

      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncAxtiveIndex}
          activeIndex={activeIndex}
        />

        {/* <Button variant="conatined" 
        className="z-50 bg-white" 
        sx={
            {
              position:'absolute',
              top:'8rem' ,
              left:'0 rem',
              transform:"translateX(-50%) rotate(90deg)",
              bgcolor:"white",
              }
            } 
            arial-label="next">
            <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)",color:"black"}} />
        </Button> */}
{
       activeIndex !==0 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "9rem",
            left: "0rem", // Move slightly outside the carousel
            transform: "translateX(-50%)",
            bgcolor: "white",
            minWidth: "25px", // Adjust button size
            height: "40px",
            "&:hover": { bgcolor: "#f0f0f0" }, // Light hover effect
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(0deg)", color: "black" }}
          />
        </Button>}
  {
      activeIndex !== items.length-5 &&  <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "9rem",
            right: "-3.5rem", // Move slightly outside the carousel
            transform: "translateX(-50%)",
            bgcolor: "white",
            minWidth: "25px", // Adjust button size
            height: "40px",
            // borderRadius: "8px",
            // boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            "&:hover": { bgcolor: "#f0f0f0" },
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(180deg)", color: "black" }}
          />
        </Button>}

        {/* <Button variant="conatined" 
        className="z-50 bg-white" 
        sx={
            {
              position:'absolute',
              top:'8rem' ,
              right:'0 rem',
              transform:"translateX(50%) rotate(90deg)",
              bgcolor:"white",
              }
            } 
            arial-label="next">
            <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}} />
        </Button> */}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
