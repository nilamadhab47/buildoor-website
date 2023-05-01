import Button from "@/components/Button";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import menu from "@/assets/Menu.png";

const Navbar = () => {
  const [displayMobileNavbar, setDisplayMobileNavbar] = useState(false);

  function scrollToSection(id) {
    setTimeout(() => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    window.location.href = "https://calendly.com/buildoorlabs/15min";
  }



  return (
    <>
      {displayMobileNavbar ? (
        <div className="mobile navbar h-screen">
          <div className="navbar-close float-right mt-8 mr-2" onClick={()=>setDisplayMobileNavbar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>{" "}
          <div>
          <ul className="cursor-pointer bg-black text-white flex flex-col items-center gap-12 mt-[8rem] text-[2rem]">
            <li>
              <Link href="#home" onClick={handleScroll}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#feature" onClick={handleScroll}>
                Feature
              </Link>
            </li>
            <li>
              <Link href="#pricing" onClick={handleScroll}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#docs" onClick={handleScroll}>
                Docs
              </Link>
            </li>
          </ul>
          </div>
         
        </div>
      ) : (
        <div className="navbar flex justify-between">
          <div className="navbar-logo">
            <span className="alpha-tag">Alpha</span>
            <Image
              src={logo}
              alt="logo"
              height={190}
              width={320}
              className="w-[180px] h-[108px] lg:w-[320px] lg:h-[190px]"
            />
          </div>
          <div className="sub-navbar md:block hidden">
            <ul className="flex gap-16 mt-16 cursor-pointer">
              <li>
                <Link href="#home" onClick={handleScroll}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#feature" onClick={handleScroll}>
                  Feature
                </Link>
              </li>
              <li>
                <Link href="#pricing" onClick={handleScroll}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#docs" onClick={handleScroll}>
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-cta md:block hidden">
            <Button text="Schedule Demo" btnStyle="mr-20 mt-12 px-8 py-4"  handleClick={handleClick}/>
          </div>
          <div className="lg:hidden block mt-12 mr-4" onClick={()=>setDisplayMobileNavbar(true)}>
            <Image src={menu} alt="menu" className="mt-" width={35} height={17} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
