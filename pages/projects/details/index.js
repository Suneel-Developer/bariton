import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import ProjectsDetailsContent from "../../../components/Projects/ProjectsDetailsContent";

const ProjectsDetails = () => {
  return (
    <>
      <Navbar />
      
      <PageBanner
        pageTitle="Projects Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects Details"
        bgImg="/images/page-title-bg2.jpg"
      />

      <ProjectsDetailsContent />

      <Footer />
    </>
  );
};

export default ProjectsDetails;
