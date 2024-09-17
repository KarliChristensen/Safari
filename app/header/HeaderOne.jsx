"use client";

import React, { useEffect, useState } from "react";
import { Blog, Home, Page, Room } from "./Menu";
import DropDown from "./DropDown";
import Image from "next/image";
import Link from "next/link";

export default function HeaderOne({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <div
      className={`header__sticky ${variant ? variant : ""} ${
        isSticky ? "header__sticky-sticky-menu" : ""
      }`}
    >
      <div className="header__area">
        <div className="container custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <Link href="/">
                  <Image
                    src="/img/Logo/Icon/Shangamera_Logo_hartebeest_beige.png"
                    className="hover:scale-200 transition-all ease-in-out"
                    alt="Hartebeest Logo"
                    width={30}
                    height={30}
                  />
                </Link>
                <span
                  className={
                    mobileToggle
                      ? "mobile-menu mobile-menu-active"
                      : "mobile-menu"
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-menu menu-responsive">
                <ul
                  className="mobile__menu"
                  style={{ display: `${mobileToggle ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/trip-details">Trip Details</Link>
                  </li>
                  {/*                   <li>
                    <Link href="/">Home</Link>
                  </li> */}
                  {/*                   <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <DropDown />
                    <ul className="sub-menu">
                      <Page />
                    </ul>
                  </li> */}
                  {/*                   <li className="menu-item-has-children">
                    <a href="#">Room</a>
                    <DropDown />
                    <ul className="sub-menu">
                      <Room />
                    </ul>
                  </li> */}
                  {/*                   <li className="menu-item-has-children">
                    <a href="#">Blog</a>
                    <DropDown />
                    <ul className="sub-menu">
                      <Blog />
                    </ul>
                  </li> */}
{/*                   <li>
                    <Link href="/booking">Booking</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="header__area-menubar-right-box">
              <div className="header__area-menubar-right-box-btn">
                <Link className="theme-btn" href="/booking">
                  Booking<i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
