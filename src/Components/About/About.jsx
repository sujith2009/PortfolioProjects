import React from "react";
import AboutCss from "../About/About.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className={`col-md-12 mt-5 d-flex flex-column justify-content-center align-items-center ${AboutCss.MainText}`}
          >
            <h1 className="text-center">
              {/* <BsFillEmojiSunglassesFill
                className="me-4"
                style={{ color: "yellow" }}
              /> */}
              Work Smarter Not <br />
              <span className="d-md-block">Harder...</span>
            </h1>

            <p
              className="text text-white mt-5"
              style={{ textAlign: "justify" }}
            >
              <FaQuoteLeft className="me-4  mb-2 fs-2" />
              As voice assistants and AI become more advanced, they might
              contribute to music creation by suggesting melodies, generating
              lyrics, or even composing entire tracks based on user preferences.
              Artists might incorporate voice assistants into live performances,
              using them to control lighting, stage effects, or interact with
              the audience in real time. Voice assistants could enable more
              personalized and immersive music Artists might incorporate voice
              assistants into live performances, using them to control
              lighting...
              <FaQuoteRight className="ms-4 mt-2 fs-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
