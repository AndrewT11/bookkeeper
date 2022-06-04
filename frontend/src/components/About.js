import React from "react";
import "./Book/Book.css";
import gauntlet from "./images/PngItem_1118875.png";
const About = () => {
  return (
    // <div style={{ color: "white", textAlign: "center", margin: "5rem" }}>
    <section className="aboutSection">
      {/* <div className="aboutImage"> */}
      {/* <img
        src="https://www.pngmart.com/files/22/Thanos-PNG-Transparent.png"
        alt="spiderpman"
      /> */}
      <img
        className="aboutImage"
        src={gauntlet}
        alt="Infinity Gauntlet Pixelated"
        height="200"
      />

      {/* </div> */}
      <div className="aboutText">
        <h2>
          Welcome to The Booker Keeper's Guild! <br />
          <br />
          You have officially been assigned to keep books. This is a mighty
          assignment that will take time and dedication <br />
          <br />
          Use this time to work hard and work well. Demonstrate your use of the
          MERN stack. Demonstrate your use of React Hooks. Forge on towards
        </h2>
      </div>
    </section>
  );
};

export default About;
