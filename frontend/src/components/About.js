import React from "react";
import "./Book/Book.css";
import developer from "./images/Developer.jpg";
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
        className="aboutImg"
        src={developer}
        alt="Infinity Gauntlet Pixelated"
        height="200"
      />

      {/* </div> */}
      <div className="aboutText">
        <h2>
          Hello! My name is Andrew Tran. I'm a full-stack web developer learning
          React and its frameworks. <br />
          <br />
          This page was a CRUD application used to practice using MongoDB Atlas
          to serve book information created by the user on the website. Material
          UI was used for much of the UI used. I hope to add React animations in
          the future to liven up the webpage. <br />
          <br />
        </h2>
      </div>
    </section>
  );
};

export default About;
