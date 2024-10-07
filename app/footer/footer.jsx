// Import necessary components and icons
import footerOne from "@/components/data/footerOne";
import Image from "next/image";
import Link from "next/link";
import Social from "../socials/page";

const {
  logo,
  title_1,
  description,
  title_2,
  widgetMenus,
  title_3,
  title_4,
  office_des,
  officeInfos,
} = footerOne;

const pageslink = [
  "Room Cleaning",
  "Car Parking",
  "Swimming pool",
  "Fitness Gym",
];

// Define the Footer component
export default function Footer() {
  return (
    <div className="footer__area">
      <div className="container">
        <div className="row flex justify-between">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <div className="footer__area-widget-about">
                <div className="footer__area-widget-about-logo">
                  {/* Company logo */}
                  <Link href="/">
                    <Image
                      src="/img/Logo/Icon/Shangamera_Logo_hartebeest_beige.png"
                      alt="Hartebeest Logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                {/* Company description */}
                <p>Discover Botswana</p>
                {/*               <div className="footer__area-widget-about-social">
                  <Social />
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              {/* Contact information */}
              <h5>Information</h5>
              <div className="footer__area-widget-contact">
                {/* Address */}
                {footerOne.officeInfos.map((item, index) => (
                  <div className="footer__area-widget-contact-item" key={index}>
                    <div className="footer__area-widget-contact-item-icon">
                      {item.icon}
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      {/* Address details */}
                      <span>
                        <Link href={item.link}>{item.info}</Link>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              {/* Page links */}
              <h5>Pages Links</h5>
              <div className="footer__area-widget-menu">
                <ul>
                  {footerOne.widgetMenus.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link}>
                        <i className="fal fa-angle-double-right"></i>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
