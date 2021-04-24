import React from "react";
import image from "../Assets/image.svg";

const Homepage = () => {
  return (
    <div className="content">
      <div className="svg">
        <img src={image} style={{ height: 200, width: 400 }} alt="images" />
      </div>
      <p>
        Namaste! Snapbase is a public photo-library application where users can
        upload and delete public images. Your images are public until these are
        hosted with us. Till then share any snap you want the world to see.
        <br />
        Get @Snapped!
      </p>
      <div className="footer">
        <p>
          {" "}
          Built with ❤️️️️ by
          <a href="https://github.com/thevinayysharma">Vinay Sharma</a>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
