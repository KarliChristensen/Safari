const footerOne = {
  logo: "/assets/img/logo-9.png",
  title_1: "About Us",
  description:
    "Subscribe to out newsletter today to receive updates on the latest news, releases and special offers respect your privacy.",
  title_2: "Other Pages",
  widgetMenus: [
    { link: "/about", title: "About Us" },
    { link: "/team", title: "Team" },
    { link: "/trip-details", title: "Trip Details" },
    { link: "/booking", title: "Booking" },
  ],
  title_3: "Gallery",
  title_4: "Office Info",
  office_des: "PO Box 834, Kasane, Republic of Botswana",
  officeInfos: [
    /*         {link:'https://www.google.com/maps',info:'GXF4+8HQ Chippenham United Kingdom',icon: <i className="fal fa-map-marked-alt"></i>}, */
    {
      link: "mailto:info@shangamera.com",
      info: "info@shangamera.com",
      icon: <i className="fal fal fa-envelope-open-text"></i>,
    },
    {
      link: "tel:+27000000000",
      info: "(+27) 000000000",
      icon: <i className="fal fa-phone-alt"></i>,
    },
    {
      link: "https://g.co/kgs/qE19rSd",
      info: "Your Destination",
      icon: <i className="fal fa-map"></i>,
    },
  ],
  compliance: [
    {
      title: "Terms & Conditions",
      link: "/compliance/Website-Terms-and-Conditions.pdf",
    },
    {
      title: "Privacy Policy",
      link: "/compliance/Privacy-policy.pdf",
    },
    {
      title: "Disclaimer",
      link: "/compliance/Disclaimer.pdf",
    },
  ],
};

export default footerOne;
