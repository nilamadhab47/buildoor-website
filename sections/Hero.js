import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useRef, useState } from "react";
import hero from "@/assets/hero.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import gradient from "@/assets/angular.png"

const Hero = () => {
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_duutcna",
        "template_psf504g",
        form.current,
        "eqWNXxLHGtKcVk-eE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setDisplaySuccessMessage(true);
  };

  function handleVideoLoad() {
    setIsLoaded(true);
  }

  return (
    <>
      <div
        className="head-info md:w-[36rem] w-[314px] h-[46px] rounded-[50px] mx-auto my-0 px-[17px] py-[10px] mt-4"
        style={{ border: "1.11739px solid rgba(255, 255, 255, 0.3)" }}
      >
        <p className="text-center text-[#F2F4F8] font-normal text-[10px] md:text-[16px] font-satoshiLight">
          noQode by Buildoor - Manifesting User-Centricity in Web3,{" "}
          <a
            className="text-[#FABEFF]"
            target="_blank"
            href="https://mirror.xyz/0xA19B625EdFB67422EE984712f6DF8d3625E64e61"
          >
            Learn More
          </a>{" "}
        </p>
      </div>
      <div
        className="hero mx-auto my-0 font-satoshi flex flex-col-reverse mt-4 lg:flex-col lg:mt-0"
        id="home"
      >
        <div className="header">
          <div className="heading">
            <h1
              className="mt-8 font-bold lg:text-[84px] text-[28px] text-center heading-h1"
              style={{}}
            >
              No-Code tool to create <br /> Impactful User Experiences
            </h1>
            <div className="subHeading">
              <ul className="flex justify-center gap-8 list-disc lg:mb-16 mb-8 text-[7px] md:text-[16px] ">
                <li>Customise User Flows</li>
                <li>Grab User Attention</li>
                <li>Drive Feature Adoption</li>
              </ul>
            </div>
          </div>
          <div className="access-input flex justify-center md:gap-8 gap-4 md:ml-20 items-center flex-col md:flex-row">
            {displaySuccessMessage ? (
              <p>Your Request has been recieved , will contact you shortly</p>
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 lg:flex-row"
                id="request"
              >
                <Input
                  placeholder="Enter Email"
                  inputStyles="lg:w-[439px] w-[239px] lg:h-[57px] h-[38px] mr-0 text-white"
                  type="email"
                  name="from_name"
                />
                <Button
                  type="submit"
                  text="Request Early Access"
                  btnStyle="mr-0 md:px-8 md:py-0 w-[11rem] md:w-auto ml-8 md:ml-0 text-[14px] lg:text-[16px] lg:h-57px justify-center"
                  imageStyle="w-[20px] lg:w-[37px]"
                />
              </form>
            )}
          </div>
        </div>
        <div className="hero mt-12 z-[2] flex justify-center items-center">
          {/* {!isLoaded && (
            <Image
              src={hero}
              alt="hero-image"
              width={847}
              height={548}
              className="my-0 mx-auto"
            />
          )} */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="lg:w-[847px] w-[300px] lg:h-[548]  lg:my-4 my-0 lg:mx-auto hero-video"
          >
            <source
              src="/video.webm"
              type="video/webm"
              width={847}
              height={548}
            />
            <source
              src="/video.mp4"
              type="video/mp4"
              width={847}
              height={548}
            />
          </video>

          {/* <Image
            src={hero}
            alt="hero-image"
            width={847}
            height={548}
            className="my-0 mx-auto"
          /> */}
        </div>
        <div className="gradient-box mt-[-3rem] z-[1] lg:flex hidden">
          {/* <Image src={gradient} alt="gradient" className="w-screen"/> */}
          {/* <div className="gradient-box-1"></div>
          <div className="gradient-box-2"></div> */}


        </div>
      </div>
    </>
  );
};

export default Hero;
