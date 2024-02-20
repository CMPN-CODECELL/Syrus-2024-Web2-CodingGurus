import React from "react";



function HeroCarousel(){
    return(
        // <div className="flex items-center justify-center h-screen">
<div className="carousel w-10/12  h-[80vh]">
<div id="slide1" className="carousel-item relative w-full h-full">
  <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide4" className="btn btn-circle">❮</a> 

  <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-black-200 sm:text-xl md:mb-8">Mumbai</p>
        <h1 className="mb-8 text-center text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Visit the financial capital of india</h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
        </div>
      </div>
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
  <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-black-200 sm:text-xl md:mb-8">Mahabaleshwar</p>
        <h1 className="mb-8 text-center text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">visit the peace of nature  </h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
        </div>
      </div>
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
  <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-black-200 sm:text-xl md:mb-8">chennai</p>
        <h1 className="mb-8 text-center text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">try chennai express to come here</h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
        </div>
      </div>
    <a href="#slide4" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
  <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle">❮</a> 
    <div className="relative flex flex-col items-center p-4 sm:max-w-xl bg-blue-200 rounded-xl bg-opacity-60">
        <p className="mb-4 text-center text-3xl text-black-200 sm:text-5xl md:mb-8">Goa</p>
        <h1 className="mb-8 text-center text-4xl font-bold text-blue sm:text-5xl md:mb-12 md:text-6xl">Beaches and Fun</h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Explore</a>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
        </div>
      </div>
    <a href="#slide1" className="btn btn-circle">❯</a>
  </div>
</div>
</div>
// </div>
    )
}

export default HeroCarousel;