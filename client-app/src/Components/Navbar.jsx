import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <header className="text-gray-600 body-font bg-white px-32 h-15 p-3 border-b border-gray-500 my-0.2 font-sans font-semibold">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <div className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />

          <span className="ml-3 text-xl font-extrabold font-serif">
            TripSync
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center pl-10 pr-10">
          <a className="mr-5 text-zinc-950 px-3">
            <Link to="/">Home</Link>
          </a>
          <a className="mr-5 text-zinc-950 px-3">
            {" "}
            <Link to="/explore">Explore</Link>
          </a>
          <a className="mr-5 text-zinc-950 px-3">
            {" "}
            <Link to="/blogs">Blogs</Link>
          </a>
          <a className="mr-5 text-zinc-950 px-3">
            {" "}
            <Link to="/community">Community</Link>
          </a>
        </nav>
        <button
          className="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded-full  text-base mt-4 md:mt-0"
          onClick={handleClick}
        >
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
