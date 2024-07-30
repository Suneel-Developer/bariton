import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogThreeGrid from "../../components/Blog/BlogThreeGrid";
import Footer from "../../components/Layouts/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Grid"
        bgImg="/images/page-title-bg2.jpg"
      />

      <BlogThreeGrid />

      <Footer />
    </>
  );
};

export default Blog;
