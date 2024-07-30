import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TermsConditionsContent from "../components/TermsConditions/TermsConditionsContent";

export default function TermsConditions() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <TermsConditionsContent />

      <Footer />
    </>
  );
}
