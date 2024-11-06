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

const facebook =
  "https://www.facebook.com/people/Shangamera-Tours-and-Safaris-Pty-Ltd/61568165613240/";
const linkedin = "";
const mail = "mailto:info@Shangamera.com";
const telephone = "+27837671046";
const map = "https://g.co/kgs/qE19rSd";
const instagram = "https://www.instagram.com/shangamera.tours.and.safaris/";

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

                <p className="">Discover Botswana</p>

                <div className="footer__area-widget-about-social">
                  <Social
                    facebook={facebook}
                    linkedin={linkedin}
                    mail={mail}
                    telephone={telephone}
                    map={map}
                    instagram={instagram}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              {/* Page links */}
              <h5>Pages</h5>
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
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              {/* Page links */}
              <h5>Compliance</h5>
              <div className="footer__area-widget-menu">
                <ul>
                  {footerOne.compliance.map((item, index) => (
                    <li key={index}>
                      <Link
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                      >
                        <i className="fal fa-angle-double-right"></i>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              {/* Contact information */}
              <h5>Information</h5>
              <div className="footer__area-widget-contact">
                {/* Address */}

                <div className="">
                  <p className="mb-2">
                    Deborah Tours and Safaris (Pty) Ltd
                  </p>
                  <p className="mb-2">
                    T/A Shangamera Tours and Safari (Pty) Ltd
                  </p>
                  <p className="mb-2">UIN: BW00006277908</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
