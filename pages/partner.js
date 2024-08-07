import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PartnerContent from "../components/Common/PartnerContent";
import Footer from "../components/Layouts/Footer";
import PartnerSlider from "../components/Common/PartnerSlider";

export default function Partner() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Partner"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Partner"
        bgImg="/images/page-title-bg2.jpg"
      />

      <PartnerContent />

      <PartnerSlider />

      <Footer />
    </>
  );
}
