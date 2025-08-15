// layout.jsx
"use client";
import 'react-modal-video/css/modal-video.min.css';
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import "./styles/styles.css";
import "./assets/css/all.css";
import "./assets/css/meanmenu.min.css";
import "./assets/sass/style.css";

const BlockedPage = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1001,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h3>Access to www.shangamera.com is temporarily blocked.</h3>
        <br></br>
        <p>The business is operating without consent from shareholders.</p>
        <p>
          For any complaints or inquiries, please contact{" "}
          <a href="mailto:null@shangamera.com">null@shangamera.com</a>{" "}
        </p>
      </div>
    </div>
  );
};

const ContentBlocker = ({ isBlocked }) =>
  isBlocked ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 999,
        pointerEvents: "none",
      }}
    />
  ) : null;

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  const isBlocked = process.env.NEXT_PUBLIC_SITE_BLOCKED === "true";
  const blurStyle = isBlocked ? { filter: "blur(5px)" } : {};

  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="favicon.png" />
      <body>
        <NextTopLoader showSpinner={false} />
        <div style={{ position: "relative" }}>
          <div id="blur-container" style={blurStyle}>
            {children}
          </div>
          <ContentBlocker isBlocked={isBlocked} />
          {isBlocked && <BlockedPage />}
        </div>
      </body>
    </html>
  );
}
