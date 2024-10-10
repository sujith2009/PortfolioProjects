import React, { useState } from "react";
import LoginCss from "./Login.module.css";
import LoginImage from "../../assets/Images/login.png";
//import HeaderLogo from "./../../../assets/Images/header.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sentData = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    axios
      .post("http://localhost/voicedb/signup.php", sentData)
      .then((result) => {
        if (result.data.status === "Sucess") {
          alert("Invalid User");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <div>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div
            className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white p-4"
            style={{ backgroundColor: "#939185" }}
          >
            <div className="text-center">
              <img
                src={LoginImage}
                alt="Profile"
                className="img-fluid mb-3"
                style={{ borderRadius: "50%", width: "350px" }}
              />
              <h2 className={`mt-3 ${LoginCss.allYourMusic}`}>
                All Your Music.
              </h2>
              <h5 className={` mb-0 ${LoginCss.anytimeAnywhere}`}>
                Anytime, anywhere.
              </h5>
            </div>
          </div>
          <div
            className={`col-md-6 d-flex flex-column justify-content-center align-items-center  ${LoginCss.loginBg}`}
          >
            <h1 className="text fw-bold" style={{ color: "#ef5a6f" }}>
              Welcome to Irai Aligal
            </h1>
            <p className="text-white">Signup your account</p>
            <form className="w-75" onSubmit={submitForm}>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${LoginCss.formControl}`}
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={data.username}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${LoginCss.formControl}`}
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className={`form-control ${LoginCss.formControl}`}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className={`form-control ${LoginCss.formControl}`}
                  placeholder="Conform Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={data.confirmPassword}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
