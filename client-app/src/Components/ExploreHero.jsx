import React from "react";

function ExploreHero() {
  return (
    <div
      className="bg-black w-full h-96 opacity-80"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/7HDi-EkG11I")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="relative w-full flex items-center justify-center pt-64">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none flex items-center">
          {/* <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg> */}
        </div>
        <input
          type="text"
          id="simple-search"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-96 ps-10 p-2.5  "
          placeholder="Search by destination"
          required
        />
      </div>
    </div>
  );
}

export default ExploreHero;
