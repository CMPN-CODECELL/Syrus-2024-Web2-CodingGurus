import { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Pages/Login";

import Signup from "./Pages/Signup";
import Blogs from "./Pages/Blogs";
import Readblog from "./Pages/Readblog";
import AddBlog from "./Pages/Addblog";
import HomePage from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/readblog/:id" element={<Readblog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
