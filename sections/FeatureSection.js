import React from "react";
import chain from "@/assets/chain.png";
import tool from "@/assets/tool.png";
import Image from "next/image";
import graph from "@/assets/Graph1.png"
import graph1 from "@/assets/Graph.png"

const FeatureSection = () => {
  return (
    <div className="feature-section mx-auto mt-[-9rem] lg:mt-[20rem] hidden md:block" id="feature">
      <h2 className="heading-title">
        A Chain Agnostic Layer to
        <br />
        Simplify UX
      </h2>
      <div className="feature-content--top flex p-[70px] gap-[104px] isolate mt-12 font-inter ">
        <div className="top--info mt-[5rem]">
          <ul>
            <li className="info-head">
              Increse User Engagement
              <br />
              <p className="info-p">Accelerate onboarding, Drive feature adoption</p>
            </li>
            <li className="info-head">
              Discover User Behaviour
              <br />
              <p className="info-p">Optimise ux based on tracked metrics</p>
            </li>
            <li className="info-head">
              Retain more Users <br /> <p className="info-p">Reduce bounce rate & user churn</p>
            </li>
          </ul>
        </div>
        <div className="top--image">
          <Image src={chain} alt="Chain" width={528} height={380} />
        </div>
      </div>
      <div className="feature-content--bottom flex mt-7 justify-between">
        <div className="bottom--tooltip">
          <Image src={tool} alt="tool" height={364} width={395} />
          <h3 className="text-3xl font-bold text-[#f6f6f7]">Engaging Immersive Experiences</h3>
          <p className="text-[#8f9bb7]">
            Drag and Drop to create an engaging user journey in minutes with our
            noQode.
          </p>
        </div>
        <div className="bottom--analytics">
          <h3 className="text-3xl font-bold text-[#f6f6f7]">Track User Journey Success with Privacy Focused Analytics.</h3>
          <p className="text-[#8f9bb7]">
            Get user analytics of your dApp’s journey without compromising on
            user privacy
          </p>
          <div className="analytics">
            <div className="analytics--top flex justify-center mb-8 gap-8">
                <div className="analytics--top--info1">
                    <p className="analytics-head">Active Users</p>
                    <p className="text-gray-300"><span className="text-black text-2xl">27</span>/80</p>
                </div>
                <div className="analytics--top--info1">
                    <p className="analytics-head">Website Visits</p>
                    <p className="text-black font-bold">3298</p>
                </div>
                <div className="analytics--top--info1">
                    <p className="analytics-head">Av. Session Length</p>
                    <p className="text-black font-bold">2m 35s</p>
                </div>
            </div>
            <div className="analytics--bottom flex justify-center mb-8 gap-8">
                <div className="analytics--top--info1">
                    <p className="analytics-head">Bounce Rate</p>
                    <p className="text-black font-bold">64%</p>
                </div>
                <div className="analytics--top--info1">
                    <p className="analytics-head">Completion Rate</p>
                    <p className="text-blackl font-bold">86%</p>
                    <Image src={graph} alt="graph" width="fill" height="fill" />

                </div>
                <div className="analytics--top--info1">
                    <p className="analytics-head">Increse Engagement</p>
                    <p className="text-black font-bold">+34%</p>
                    <Image src={graph1} alt="graph" width="fill" height="fill"  />

                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
