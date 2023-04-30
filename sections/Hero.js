import Button from "@/components/Button";
import Input from "@/components/Input";
import React, {useRef} from "react";
import hero from "@/assets/hero.png";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const Hero = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_duutcna', 'template_psf504g', form.current, 'eqWNXxLHGtKcVk-eE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <>
      <div
        className="head-info md:w-[36rem] w-[314px] h-[46px] rounded-[50px] mx-auto my-0 px-[17px] py-[10px] mt-4"
        style={{ border: "1.11739px solid rgba(255, 255, 255, 0.3)" }}
      >
        <p className="text-center text-[#F2F4F8] font-normal font-satoshi text-[10px] md:text-[16px]">
          noQode by Buildoor - Manifesting User-Centricity in Web3,{" "}
          <a className="text-[#FABEFF]" target="_blank" href="https://mirror.xyz/0xA19B625EdFB67422EE984712f6DF8d3625E64e61">Learn More</a>{" "}
        </p>
      </div>
      <div className="hero mx-auto my-0 font-satoshi flex flex-col-reverse mt-4 lg:flex-col lg:mt-0" id="home">
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
          <div className="access-input flex justify-center md:gap-8 gap-4 md:ml-20 ml-12 flex-col md:flex-row">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 lg:flex-row">
            <Input
              placeholder="Enter Email"
              inputStyles="lg:w-[439px] w-[239px] lg:h-[57px] h-[38px] mr-0 text-white"
              type="email"
              name= "from_name"
            />
            <Button
              type="submit"
              text="Request Early Access"
              btnStyle="mr-20 md:px-8 md:py-0 w-[7rem] md:w-auto ml-16 md:ml-0 text-[8px] lg:text-[16px]"
              imageStyle="w-[20px] lg:w-[37px]"
            />
            </form>
          </div>
        </div>
        <div className="hero">
          <video autoPlay muted loop className="w-[847px] h-[548] lg:my-4 my-0 mx-auto hero-video">
            <source src="/video.mp4" type="video/mp4" width={847} height={548}/>
          </video>

          {/* <Image
            src={hero}
            alt="hero-image"
            width={847}
            height={548}
            className="my-0 mx-auto"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
