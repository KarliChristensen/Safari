"use client";
import React from "react";
import Footer from "../footer/footer";
import BreadCrumb from "../breadcrumb/breadcrumb";
import ServicesDetails from "./service-details";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import SEO from "@/components/seo";

const Servicedetails = () => {
  return (
    <>
      <SEO pageTitle="Trip Details" />
        <HeaderOne />
        <BreadCrumb title="Trip Details" innerTitle="Trip Details" bgImage="/img/unsplashed/colin-hobson-gqGMkIWotN0-unsplash.jpg"/>
        <ServicesDetails />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Servicedetails;
