import React from "react";
import Navbar from "../components/Layouts/Navbar";
import TopHeader from "../components/HomeSix/TopHeader";
import MainBanner from "../components/HomeSix/MainBanner";
import FunFacts from "../components/HomeSix/FunFacts";
import TopFeaturedSolutions from "../components/HomeSix/TopFeaturedSolutions";
import AboutAI from "../components/HomeSix/AboutAI";
import Services from "../components/HomeSix/Services";
import ComputerVisionAI from "../components/HomeSix/ComputerVisionAI";
import PricingPlan from "../components/HomeSix/PricingPlan";
import LatestBlog from "../components/HomeSix/LatestBlog";
import Newsletter from "../components/HomeSix/Newsletter";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <MainBanner />

      <FunFacts />

      <TopFeaturedSolutions />

      <AboutAI />

      <Services />

      <ComputerVisionAI />

      <PricingPlan />

      <LatestBlog />

      <Newsletter />

      <Footer />
    </>
  );
}; 
