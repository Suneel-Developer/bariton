import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ServicesStyleThree from "../components/Services/ServicesStyleThree";
import Navbar from "../components/Layouts/Navbar";

const ServicesThree = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Three"
        bgImg="/images/page-title-bg1.jpg"
      />

      <ServicesStyleThree />

      <Footer />
    </>
  );
};

export default ServicesThree;
