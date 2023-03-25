import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Make a Reservation" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "1rem" }}>
        Contact Us
      </h1>
      <div className="app__wrapper-content">
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "1rem 0" }}
        >
          Find Us
        </p>
        <p className="p__opensans">2321 5th Ave San Diego, CA 92101</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "1rem 0" }}
        >
          Call Us
        </p>
        <p className="p__opensans">(619) 238-4760</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "1rem 0" }}
        >
          Open Hours
        </p>
        <p className="p__opensans">Sunday - Thursday: 4:00 pm - 9:00 pm</p>
        <p className="p__opensans">Friday - Saturday: 4:00 pm - 10:00 pm</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
