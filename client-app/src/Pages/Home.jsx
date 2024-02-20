import React from "react";
import deadpool from "../assets/deadpool.png"
import HeroCarousel from "../Components/HeroCarousel";


function HomePage(){
    
    return(
<section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg  ">
      {/* <!-- image - start --> */}
      {/* <img src="    https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" /> */}
      {/* <!-- image - end --> */}
<HeroCarousel/>
      {/* <!-- overlay - start --> */}
      {/* <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div> */}
      {/* <!-- overlay - end --> */}

      {/* <!-- text start --> */}
      
      {/* <!-- text end --> */}
    </section>
    
    )
}

export default HomePage;