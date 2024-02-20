import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore"; // Import Firestore functions as needed
import { db } from "../Firebase/config.js";

function TravelTimeline() {
  const [timelineData, setTimelineData] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  // Fetch user's timeline data based on the logged-in user's email (replace 'userEmail' with actual variable)
  const email = localStorage.getItem("email");
  const fetchUserTimeline = async () => {
    try {
      const timelineRef = collection(db, "timeline");
      const userTimelineQuery = query(timelineRef, where("email", "==", email));
      const snapshot = await getDocs(userTimelineQuery);

      const data = snapshot.docs.map((doc) => doc.data());
      setTimelineData(data);
    } catch (error) {
      console.error("Error fetching timeline:", error.message);
      // Handle error or show user feedback
    }
  };

  useEffect(() => {
    // Fetch user's timeline data when the component mounts
    fetchUserTimeline();
  }, []); // Empty dependency array ensures the effect runs once

  const handleStateClick = (state) => {
    // Toggle the selected state
    setSelectedState((prevState) => (prevState === state ? null : state));
  };

  return (
    <>
      <div>
        {/* Render State Cards */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          {timelineData.map((timelineItem) => (
            <div
              key={timelineItem.visitedState}
              onClick={() => handleStateClick(timelineItem.visitedState)}
              style={{
                // border: "1px solid #ccc",
                margin: "5px",
                padding: "10px",
                cursor: "pointer",
                width: "116%",
              }}
            >
              <section class="text-gray-600 body-font">
                <div class="container px-5 py-7 mx-auto  md:w-4/5 flex flex-wrap">
                  <div class="flex relative pt-10 pb-20 sm:items-center md:w-4/5 mx-auto bg-cyan-50">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                      1
                    </div>
                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                          {timelineItem.visitedState}
                          {/* Date: {destination.date} */}
                        </h2>
                        <p class="leading-relaxed">
                          <p>Start date: {timelineItem.startDate}</p>
                          <p>End date {timelineItem.endDate}</p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>

        {/* Render Dropdown Timeline of Destinations */}
        {selectedState && (
          <div>
            {/* <h3>{selectedState} Timeline</h3> */}
            {timelineData
              .filter((item) => item.visitedState === selectedState)
              .map((stateItem) => (
                <div key={stateItem.visitedState}>
                  {/* <h4>{stateItem.visitedState} Destinations</h4> */}
                  <ul>
                    {stateItem.destinations.map((destination) => (
                      <li key={destination.name}>
                        <section class="text-gray-600 body-font">
                          <div class="container px-5 py-7 mx-auto flex flex-wrap">
                            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto bg-white">
                              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                                1
                              </div>
                              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-12 h-12"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                  </svg>
                                </div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                                    {destination.name}
                                    Date: {destination.date}
                                  </h2>
                                  <p class="leading-relaxed">
                                    <p>Hotel: {destination.hotel}</p>
                                    <p>Food: {destination.food}</p>
                                    <p>Rating: {destination.rating}</p>
                                    <p>Review: {destination.review}</p>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* Add more destination details as needed */}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TravelTimeline;
