import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Servicesteam from "./servicesteam";
import SEO from "@/components/seo";

const Team = () => {
  return (
    <>
      <SEO pageTitle="Team" />
        <HeaderOne />
        <BreadCrumb title='Team' innerTitle='Team' bgImage='/img/unsplashed/cj-A8uKl1T59bA-unsplash.jpg'  />
        <Servicesteam />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Team;
