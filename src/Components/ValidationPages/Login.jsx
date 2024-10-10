import React, { useState } from "react";
import LoginCss from "./Login.module.css";
import LoginImage from "../../assets/Images/login.png";
//import HeaderLogo from "./../../../assets/Images/header.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const submit = (e) => {
  //   const sentData = {
  //     username: data.username,
  //     password: data.password,
  //   };
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost/voicedb/login.php", sentData)
  //     .then((result) => {
  //       if (result.data.status === "sucess") {
  //         navigate("/");
  //       } else {
  //         alert("invalid user");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("There was an error!", error);
  //     });
  //   console.log(data);
  // };
  const submit = (e) => {
    const sentData = {
      email: data.email,
      password: data.password,
    };
    e.preventDefault();

    axios
      .post("http://localhost/voicedb/login.php", sentData)
      .then((result) => {
        console.log("Response data: ", result.data); // Log the entire response
        if (result.data.status === "valid") {
          console.log("Navigating to homepage...");
          navigate("/"); // Check if this log shows up
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    console.log(data);
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
            <p className="text text-white">Login your account</p>
            <form className="w-75" onSubmit={submit}>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${LoginCss.formControl}`}
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className={`form-control ${LoginCss.formControl}`}
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login
              </button>

              <div className="text-center mt-2">
                <h6 className="text-white">
                  Already have an account?
                  <Link to={"/signup"} className="ms-2">
                    Signup
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
