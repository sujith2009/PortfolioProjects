import React, { useEffect, useState } from "react";
import ChatBoxCss from "./../AichatBox/Chatbox.module.css";
import axios from "axios";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Chatbox = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState(0);

  const dataDisplay = async () => {
    if (isLoading) return;

    const currentTime = Date.now();
    if (currentTime - lastRequestTime < 1000) return; // 1-second debounce

    setIsLoading(true);
    setAnswer("loading");

    try {
      const responsive = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDNCTdTyqpUcStRY_fpP5H6UFvq1SaDT34`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(responsive.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 429) {
        setAnswer("Too many requests. Please try again later.");
      } else {
        setAnswer("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
      setLastRequestTime(currentTime);
    }
  };

  const textChange = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <div>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-75">
          <p className={`text text-white ${ChatBoxCss.displayData}`}>
            {answer}
          </p>
          <h2 className="text text-center mb-3 text-white">Chat AI</h2>
          <div className="col d-flex justify-content-center align-items-center flex-column">
            <input
              type="text"
              placeholder="message ai"
              onChange={textChange}
              value={question}
              className="form-control py-4 px-3"
            ></input>
            <button
              onClick={dataDisplay}
              className={`btn  mt-3 ${ChatBoxCss.chatBtn}`}
              disabled={isLoading}
            >
              <FaArrowUp />
            </button>

            <Link to={"/"} className="btn btn-warning fw-bold mt-5">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
