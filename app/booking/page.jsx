"use client"

import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Contactcontainer from "./contact-container";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Booking" />
        <HeaderOne />
        <BreadCrumb title="Booking" innerTitle="Booking" bgImage="/img/unsplashed/geranimo-PuhnmljHXJ8-unsplash.jpg"/>
        <Contactcontainer />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Contact;
