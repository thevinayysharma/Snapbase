import React from "react";
import image from "../Assets/image.svg";

const Title = () => {
  return (
    <div className="content">
      <div className="svg">
        <img src={image} style={{ height: 200, width: 400 }} alt="images" />
      </div>
      <p>Welcome to Snapbase, snap your things below</p>
    </div>
  );
};

export default Title;
