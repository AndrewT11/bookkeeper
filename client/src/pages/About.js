import React from "react";
import "../components/Book/Book.css";
import developer from "../images/Developer.png";
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
      {/* <aside className="aboutContactBar">
        <ul>
          <li>
            <a
              href="mailto:TranAndrewWebDev@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-envelope-open-text fa-4x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AndrewT11"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github fa-4x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andrew-tran-011/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fa fa-linkedin-square fa-4x"></i>
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1KgYkTOHGvnS2QV2N9UOBaQT37B4zkiIASSHcqXPRzKE/edit">
              <i className="far fa-file fa-4x"></i>
            </a>
          </li>
        </ul>
      </aside> */}
    </section>
  );
};

export default About;
