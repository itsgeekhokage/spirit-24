/** @format */

import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Event from "./Pages/Event";

import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Speakers from "./Pages/Speakers";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Speakers />
      <Event />
      <Footer />
    </>
  );
};

export default App;
