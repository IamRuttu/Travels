import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../Home/index";
import About from "../About/index";
import Services from "../Services/index";
import Contact from "../Contact/index";
import Gallery from "../Gallery/index";


function RoutesPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesPage;
