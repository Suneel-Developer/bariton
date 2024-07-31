import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeSix/MainBanner";
import TopFeaturedSolutions from "../components/HomeSix/TopFeaturedSolutions";
import AboutAI from "../components/HomeSix/AboutAI";
import Services from "../components/HomeSix/Services";
import ComputerVisionAI from "../components/HomeSix/ComputerVisionAI";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>

      <Navbar />

      <MainBanner />

      <TopFeaturedSolutions />

      <AboutAI />

      <Services />

      <ComputerVisionAI />

      <Footer />
    </>
  );
}; 
