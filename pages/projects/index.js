import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import ProjectsCard from "../../components/Projects/ProjectsCard";

const Projects = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects"
        bgImg="/images/page-title-bg1.jpg"
      />

      <ProjectsCard />

      <Footer />
    </>
  );
};

export default Projects;
