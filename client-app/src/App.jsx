import { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./Pages/Login";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Location from './Pages/Location'
import Signup from "./Pages/Signup";
import Blogs from "./Pages/Blogs";
import Readblog from "./Pages/Readblog";
import AddBlog from "./Pages/Addblog";
import HomePage from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Explore from "./Pages/Explore";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/readblog/:id" element={<Readblog />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/location" element={<Location />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
