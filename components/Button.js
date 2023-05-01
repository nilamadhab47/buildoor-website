import Image from "next/image";
import React from "react";
import icon from "@/assets/icon.png"
const Button = ({ text, handleClick, btnStyle, type, imageStyle, href }) => {

  if(type === "submit") {
    return (
      <a href={href}>
      <button
        onClick={handleClick}
        type="submit"
        style={{
          filter:
            "drop-shadow(11.4px -9.88px 81.32px rgba(248, 0, 59, 0.3)) drop-shadow(-10.64px 12.54px 60.8px rgba(0, 56, 255, 0.3))",
          borderRadius: "35.72px",
          border: "1px solid transparent",
          background:
            "linear-gradient(black, black) padding-box, linear-gradient(9deg,  rgba(19, 14, 255,1),  rgb(73, 255, 233, 0.4), rgba(255, 255, 255, 0), rgba(255, 44, 247, 0.3), rgba(251, 4, 123, 68.69%), #FF7EBC) border-box",
        }}
        className={`
             text-white lg:p-3 p-[6px] rounded-[35px] bg-[#0e101c] flex lg:gap-4 gap-1 items-center  ${btnStyle}`}
      >
        {text}<Image src={icon} alt="icon" width="fill" height="fill" className={`${imageStyle}`}/>
      </button>
      </a>
    );
  }

  return (
    <>
    <button
      onClick={handleClick}
      style={{
        filter:
          "drop-shadow(11.4px -9.88px 81.32px rgba(248, 0, 59, 0.3)) drop-shadow(-10.64px 12.54px 60.8px rgba(0, 56, 255, 0.3))",
        borderRadius: "35.72px",
        border: "1px solid transparent",
        background:
          "linear-gradient(black, black) padding-box, linear-gradient(9deg,  rgba(19, 14, 255,1),  rgb(73, 255, 233, 0.4), rgba(255, 255, 255, 0), rgba(255, 44, 247, 0.3), rgba(251, 4, 123, 68.69%), #FF7EBC) border-box",
      }}
      className={`
           text-white p-3 rounded-[35px] bg-[#0e101c] btn-compo  ${btnStyle}`}
    >
      {text}
    </button>
    
    </>
  );
};

export default Button;
