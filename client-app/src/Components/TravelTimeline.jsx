import React from 'react'

function TravelTimeline() {
  return (
    <div><div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-full h-full bg-blue-500"></div>
      </div>
      <div className="flex flex-col text-center mt-10 w-full justify-center items-center">
        <h1 className="text-3xl font-medium title-font text-gray-900 tracking-widest border-b-2 border-blue-500 pb-2 mb-4">Timeline</h1>
      </div>

      <section className="text-gray-600 body-font items-center flex justify-center">
        <div className="container px-5 py-20 mx-auto flex flex-wrap justify-center">
          <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm hover:bg-blue-600">1</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center hover:bg-blue-600">
                <a href='#' ><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg></a>
              </div>
<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Mahableshwar</h2>
            <p className="leading-relaxed">perfect 1 day itneary</p>
            </div>
                        </div>
          </div>

          <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm hover:bg-blue-600">2</div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center hover:bg-blue-600">
                <a href='#' ><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg></a>
              </div>
<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
<h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Mahableshwar</h2>
            <p className="leading-relaxed">perfect 1 day itneary</p>
          </div>
        </div>
            </div>
<div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
            </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm hover:bg-blue-600">3</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center hover:bg-blue-600">
                <a href='#'  ><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg></a>
              </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Mahableshwar</h2>
            <p className="leading-relaxed">perfect 1 day itneary</p>
          </div>
        </div>
      </div>
      
    </div>
  </section></div>
  )
}

export default TravelTimeline