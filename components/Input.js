import React, { useState } from "react";

const Input = ({
  placeholder,
  value,
  handleChange,
  title,
  id,
  inputStyles,
  type,
  name
}) => {




  return (
    <>
      
        <input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          title={title}
          id={id}
          type={type}
          name={name}
          style={{
            boxShadow: "15.7706px -13.6678px 112.497px rgba(248, 0, 59, 0.3), -14.7192px 17.3476px 84.1097px rgba(0, 56, 255, 0.3)",
            border: "1px solid transparent",
        background:
          "linear-gradient(black, black) padding-box, linear-gradient(9deg,  rgba(19, 14, 255,1),  rgb(73, 255, 233, 0.4), rgba(255, 255, 255, 0), rgba(255, 44, 247, 0.3), rgba(251, 4, 123, 68.69%), #FF7EBC) border-box",
          paddingLeft:" 3rem",
          }}
          className={`p-3 rounded-[50px] text-sm placeholder-placeHolderTxt bg-black outline-none ${inputStyles}`}
        />
      
       
      
    </>
  );
};

export default Input;
