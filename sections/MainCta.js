import Button from "@/components/Button";
import React from "react";

const MainCta = () => {
  return (
    <div className="main-cta font-satoshi hidden md:block">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Learn how Buildoor can help you succeed</h1>
      <p className="text-[18px] font-light text-center text-white">
        at BUILDOOR we envision creating user-centric web3 experiences tailored
        for success. Create simple guided user navigation with our drag and drop
        interface in minutes and integrate within your dApps front-end with a
        three line code.
      </p>
      <Button text="Schedule a Demo" btnStyle="ml-[31rem] mt-4"/>
    </div>
  );
};

export default MainCta;
