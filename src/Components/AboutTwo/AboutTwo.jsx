import React from "react";
import AboutTwoCss from "../AboutTwo/AboutTwo.module.css";
import AiVideo from "./.././../assets/video/chat.mp4";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className={`text text-center mt-5 ${AboutTwoCss.getyourCss}`}>
              Get Your Answers Using AI Chatbox
            </h3>
            <div className="text-center mt-5">
              <video
                src={AiVideo}
                autoPlay
                loop
                muted
                className={`${AboutTwoCss.videoCss}`}
              ></video>
              <Link
                to={"/chatbox"}
                className={`btn mt-5 btn-lg ${AboutTwoCss.buttonCss}`}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
