import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import React, { useState,useRef } from "react";
import code from "@/assets/code.png";
import Tools from "@/assets/Tools.png";
import Coins from "@/assets/Coins.png";
import Megaphone from "@/assets/Megaphone.png";
import Verified from "@/assets/Verified.png";
import FingerPrint from "@/assets/Fingerprint.png";
import Conference from "@/assets/Conference.png";
import emailjs from "@emailjs/browser";


const FeatureSectionII = () => {
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);

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

  return (
    <div
      className="feature-section-II md:mt-[7rem] mt-8 font-satoshi"
      id="docs"
    >
      <div className="code-generation flex justify-center gap-[8rem] flex-col-reverse md:flex-row">
        <div className="code-info">
          <h2 className="features-section-2--heading text-center lg:text-justify">
            Transparent, Secure,
            <br /> Three Line of Code
          </h2>
          <ul className="mt-8 font-normal text-[#8f9bb7] lg:list-disc ml-8 text-center lg:text-justify list-none">
            <li>Safe & Secure</li>
            <li>Integrate within a minute</li>
            <li>Only enhances your front-end</li>
            <li>No back-end involvement</li>
          </ul>

          <div className="request-inbox-email mt-8 lg:flex items-center flex-col lg:flex-row hidden">
            {displaySuccessMessage ? (
              <p>Your Request has been recieved , will contact you shortly</p>
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 lg:flex-row"
              >
                <Input
                  type="email"
                  name="from_name"
                  placeholder="Email"
                  inputStyles="md:w-[309px] w-[295px] h-[57px] lg:mt-4"
                />
                <Button
                  type="submit"
                  text="Join our Alpha"
                  btnStyle=" py-2 mt-4 px-[25px] w-max h-[57px]"
                />
              </form>
            )}
          </div>
        </div>
        <div className="code-image">
          <Image src={code} alt="code" height={327} width={564} className="w-[300px] lg:w-[564px] lg:h-[327px] mx-auto lg:mx-0 " />
        </div>
      </div>

      <div className="features-list mt-12">
        <div className="feature-item-top flex justify-center gap-8 flex-col md:flex-row items-center">
          <div className="feature-item-top-list">
            <Image src={Tools} alt="fingers" width={52} height={46} />
            <h4 className="list-heading">No - Code Tool</h4>
            <p className="list-subHeading">
              As simple as drag and drop, create Immersive experiences on the
              fly with a no-code tool.
            </p>
          </div>
          <div className="feature-item-top-list">
            <Image src={FingerPrint} alt="tools" width={46} height={46} />
            <h4 className="list-heading">Privacy Focused Analytics</h4>
            <p className="list-subHeading">
              Get user journey analytics on your dashboard, know the metrics
              that matter.
            </p>
          </div>
          <div className="feature-item-top-list">
            <Image src={Coins} alt="Coins" width={46} height={46} />
            <h4 className="list-heading">Incentivize Engagement</h4>
            <p className="list-subHeading">
              Trigger multiple incentives in form of tokens, NFTs, XPs everytime
              users engage with a feature.
            </p>
          </div>
        </div>
        <div className="feature-item-below flex justify-center gap-8 mt-16 flex-col md:flex-row items-center">
          <div className="feature-item-top-list">
            <Image src={Conference} alt="Conference" width={45} height={42} />
            <h4 className="list-heading">User Segmentation</h4>
            <p className="list-subHeading">
              Segment / Customize and display immersive flows based on Wallet
              address.
            </p>
          </div>
          <div className="feature-item-top-list">
            <Image src={Verified} alt="Verified" width={46} height={46} />
            <h4 className="list-heading">Auto Verify On-chain Interaction</h4>
            <p className="list-subHeading1">
              No extra steps involved, Automatically track conversion and north
              star metrics by verifying on-chain actions.
            </p>
          </div>
          <div className="feature-item-top-list">
            <Image src={Megaphone} alt="Coins" width={46} height={46} />
            <h4 className="list-heading">Promote Campaigns</h4>
            <p className="list-subHeading">
              Promote your campaigns with Buildoor Discover and 500+ partnered
              communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionII;
