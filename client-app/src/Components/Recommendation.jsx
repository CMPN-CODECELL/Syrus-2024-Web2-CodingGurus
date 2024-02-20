import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios'
function Recommendation() {
  const [rec_cards,setrec_cards]=useState(null)
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:5000/recommendation') // Include the specific endpoint
    .then(response => {
      // Handle the response data
      var data=response.data
      console.log(data);
      var tempcards=data.map(item=>{
        return(
          <div className="py-5 flex mx-20 px-20 flex-wrap md:flex-nowrap border-t-2 border-b-2 border-l-2 border-r-2 border-blue-200 rounded-md shadow-lg">
          <div className="w-20 h-20 mx-auto my-5 sm:mx-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="md:flex-grow xl:mx-10 sm:mx-4 md:mx-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-4">
                {item.name}
              </h2>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="ml-2 text-lg text-gray-600">4.5</span>
              </div>
            </div>
            <p className="leading-relaxed">
              {item.info}
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-4">
              Know More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        )
      })
      setrec_cards(tempcards);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  };
  return (
    <div className="bg-white">
      <div className="flex flex-col text-center pt-10 w-full justify-center items-center">
        <h1 className="text-3xl font-bold sm:text-3xl text-black">Explore</h1>
      </div>
      <section className="text-gray-600 body-font overflow-hidden ">
        {/* <div className="container border-blue-700 px-30 py-24  sm:mx-2 md:mx- lg:mx-8 xl:mx-20 2xl:mx-20"> */}
{/* <<<<<<< Updated upstream
        <div className="flex justify-center items-center h-screen">
          <div className="container  px-30 py-24  sm:mx-2 md:mx-2 lg:mx-8 xl:mx-20 2xl:mx-20">
            {/* <div className="-my-8  divide-y-2 divide-gray-100"> */}

        <div className="container  ">
          <div className="-my-8  divide-y-2 divide-gray-100">

           {rec_cards}
            {/* More items go here */}
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center m-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Recommendation;