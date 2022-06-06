import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import gauntlet from "../images/PngItem_1118875.png";

const Home = () => {
  return (
    <div>
      {/* <div style={{ color: "white", textAlign: "center", margin: "5rem" }}> */}
      <section className="homeSection">
        {/* <div className="homeImage"> */}
        {/* <img
        src="https://www.pngmart.com/files/22/Thanos-PNG-Transparent.png"
        alt="spiderpman"
      /> */}
        <img
          className="homeImage"
          src={gauntlet}
          alt="Infinity Gauntlet Pixelated"
          height="200"
        />

        {/* </div> */}
        <div className="homeText">
          <h2>
            Welcome to The Booker Keeper's Guild! <br />
            <br />
            You have officially been assigned to keep books. This is a mighty
            assignment that will take time and dedication! <br />
            <br />
            As the saying goes, never let a good book go to waste. Unless you
            have an Amazon Fire.
          </h2>
        </div>
        <div className="homeButtons">
          <Button
            variant="contained"
            color="success"
            LinkComponent={Link}
            to={"/books"}
            sx={{ mt: "auto", margin: "2rem" }}
          >
            View your Books
          </Button>
          <Button
            variant="contained"
            color="secondary"
            LinkComponent={Link}
            to={"/add"}
            sx={{ mt: "auto", margin: "2rem" }}
          >
            Add a Book
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
