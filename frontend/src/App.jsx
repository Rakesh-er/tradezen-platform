import React from "react";
import reactDOM from "react-dom";
import HomePage from "../src/landingPage/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../src/landingPage/signup/Signup";
import AboutPage from "../src/landingPage/about/AboutPage";
import ProductsPage from "../src/landingPage/products/ProductsPage";
import PricingPage from "../src/landingPage/pricing/PricingPage";
import SupportPage from "../src/landingPage/suppport/SupportPage";
import PageNotFound from "../src/landingPage/PageNotFound";
import Navbar from "../src/landingPage/Navbar";
import Footer from "../src/landingPage/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
