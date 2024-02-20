import React, { useState, useEffect } from "react";
import deadpool from "../assets/deadpool.png";
var data = [
  {
    id: 1,
    name: "Mumbai",
    info: "Visit the financial capital of india",
    imgsrc: deadpool,
  },
  {
    id: 2,
    name: "goa",
    info: "amxain fsddu asfbkjf ahs wdub ",
    imgsrc: deadpool,
  },
  {
    id: 3,
    name: "delhi",
    info: "amxain asbh asbuf ahs wdub ",
    imgsrc: deadpool,
  },
];
{
  /* <div id= {slide${item.id}} className="carousel-item relative w-full h-full"> */
}
var herocards = data.map((item) => {
  return (
    <div id={`slide${item.id}`} className="relative w-full h-full">
      <img src={item.imgsrc} className="w-full h-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        {/* <a href={`slide${item.id - 1}`} className="btn btn-circle">
          ❮
        </a> */}
        {/* <a href={`slide${item.id + 1}`} className="btn btn-circle">
          ❯
        </a> */}
      </div>
      <div className="absolute bottom-0 left-0 h-25vh w-70vw flex-col ml-2 items-center justify-center sm:max-w-2xl gap-5  bg-opacity-60">
        <div className="h-full w-full flex flex-col justify-end p-2 mb-2 overflow-hidden bg-blue-200">
          <p className="text-left text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
            {item.name}
          </p>
          <h1 className="text-left text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800">
            {item.info}
          </h1>
        </div>
        <div className="flex w-full h-2/4 justify-start align-baseline mb-2 gap-2.5 sm:justify-start">
          <a
            href="#"
            className="inline-block rounded-lg h-full bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
});

function HeroCarousel() {
  const [activecard, setcard] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setcard(prevActiveCard => prevActiveCard + 1);
  //   }, 1000);

  //   // Clean up the interval to avoid memory leaks
  //   return () => clearInterval(intervalId);
  // }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    // <div className="flex items-center justify-center h-screen">
    <div className=" w-screen   h-auto">{herocards[activecard]}</div>
    // </div>
  );
}

export default HeroCarousel;
