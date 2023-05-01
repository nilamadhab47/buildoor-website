import React from "react";
import logo from "@/assets/logo.png";
import techstars from "@/assets/techstars.png";
import Image from "next/image";
import {FaTelegramPlane, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black font-satoshi" style={{borderTop: "1px solid #3A3838"}}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center mt-[-3rem]">
              <Image src={logo} alt="logo" width={322} height={141} />
            </a>
            <span className="flex mt-[-4rem] ml-16 mb-4">
              backed by{" "}
              <Image src={techstars} alt="techstars" height={35} width={134} />
            </span>
            <p className="ml-16">Making web3 User-Centric</p>
            <div className="sm:flex sm:items-center sm:justify-between mt-3">
              <div className="flex mt-3 sm:justify-center sm:mt-0 ml-16 mb-[8rem] gap-2 ">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaTelegramPlane className="w-5 h-5"/>
                </a>
                <a
                  href="https://www.linkedin.com/company/buildoorlabs/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaLinkedin className="w-5 h-5"/>
                </a>
                <a
                  href="https://twitter.com/buildoorxyz"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="https://github.com/buildoorxyz"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
              </div>
            </div>
        
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Quick Links
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#home" className="hover:underline">
                    Get Early Access
                  </a>
                </li>
                <li>
                  <a href="https://mirror.xyz/0xA19B625EdFB67422EE984712f6DF8d3625E64e61" className="hover:underline">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline "
                  >
                    Apply For Partnership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Brandkit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Support
              </h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <a href="https://calendly.com/sparkinlife/30min?month=2023-04" className="hover:underline">
                    Request Demo
                  </a>
                </li>
                <li>
                  <a href="mailto:knock@buildoor.club" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:mx-[9rem] flex-col lg:flex-row">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="www.buildoor.xyz" className="hover:underline">
                  BUILDOOR Labs
                </a>
                . All Rights Reserved.
              </span>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-12">
            Terms & Services  |  Privacy Policy
              </span>
      </div>
    </footer>
  );
};

export default Footer;
