import React, {useState, useEffect} from "react";
import filecoin from "@/assets/filecoin.png";
import eth from "@/assets/eth.png";
import aave from "@/assets/aave.png";
import polygon from "@/assets/polygon.png";
import techstars from "@/assets/techstars.png";
import tootip from "@/assets/tooltip.png";
import interfaceImage from "@/assets/interface-image.png";
import Image from "next/image";
import Button from "@/components/Button";
import { motion, useTransform, useMotionValue } from "framer-motion";
const heading = "<noQode/>";
const NoCodeToolSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY)

      if (scrollY >= 1116) {
        setPosition({ x: 208, y: 70 });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    <div className="no-code-tool-section my-16 mx-auto font-satoshi">
      <div className="no-code--header">
        <h3 className="no-code--header-title font-bold md:text-[40px] text-[20px] text-center ">
          backers and supporters
        </h3>
        <div>
          <ul className="flex">
            <li>
              <Image src={techstars} alt="logo1" width={212} height={55} />
            </li>
            <li>
              <Image src={polygon} alt="logo1" width={194} height={50} />
            </li>
            <li>
              <Image src={aave} alt="logo1" width={233} height={62} />
            </li>
            <li>
              <Image src={eth} alt="logo1" width={214} height={56} />
            </li>
            <li>
              <Image src={filecoin} alt="logo1" width={189} height={49} />
            </li>
          </ul>
        </div>
      </div>

      <div className="no-code flex justify-around flex-col-reverse md:flex-row">
        <div className="no-code--feature md:mt-20 mt-[-3rem] ml-8 md:ml-0 text-lg">
          <ul className="feature-listing">
            <li className="font-normal text-2xl mb-8 text-[#A594FD] hidden md:block">
              Introducing
            </li>
            <p
              className="text-[#f1f1ef] font-light text-[3rem]"
              style={{ lineHeight: "50px" }}
            >
              {heading}
              <br />
              way to create <br />{" "}
              <span className="user-journey font-bold">User Journey</span>
            </p>
            <li className="mt-8 mb-4">Create In-app guides</li>
            <li className="mb-4">Help users navigate</li>
            <li>Accelerate time to value</li>
          </ul>
        </div>
        <div className="no-code--sample mt-0">
          <Image
            src={interfaceImage}
            alt="interface"
            height={358}
            width={493}
          />
          <Button
            text="Connect Wallet"
            btnStyle="relative lg:top-[-18rem] top-[-12rem] lg:left-[3rem] left-0"
          />
          <Button
            text="Swap"
            btnStyle="relative lg:top-[-13rem] top-[-9rem] lg:left-[12rem] left-8 py-[6px] px-12"
          />
          <Image
            src={tootip}
            alt="tooltip"
            height={391}
            width={232}
            className="relative lg:top-[-18rem] top-[-14rem] md:left-0 left-[-8rem] hidden lg:block"
            style={{ transform: `translate(${position.x}px, ${position.y}px)`, transition: 'transform 0.3s ease-out' }}
          />
          <Image
            src={tootip}
            alt="tooltip"
            height={391}
            width={232}
            className="relative lg:top-[-18rem] top-[-11rem] md:left-0 left-[1rem] lg:hidden"
          />
                {/* <motion.img
        src="./tooltip.png"
        alt="Image"
        style={{x, y }}
        className="relative top-[-18rem] md:left-0 left-12"
        drag
      /> */}

        </div>
      </div>
    </div>
  );
};

export default NoCodeToolSection;
