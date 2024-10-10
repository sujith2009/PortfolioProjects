import React from "react";
import NavbarCss from "../Navbar/Navbar.module.css";
import LogoApp from "../../assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import HeaderLogo from "../../assets/Images/header.png";
import axios from "axios";

// <FaRegUser className="text-white" />;

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication check
  const navigate = useNavigate();
  const [firstLetter, setFirstLetter] = useState("");

  useEffect(() => {
    // Fetch the user's email from the backend
    axios
      .get("http://localhost/voicedb/getUserInfo.php")
      .then((response) => {
        if (response.data.email) {
          const email = response.data.email;
          setFirstLetter(email.charAt(0).toUpperCase()); // Capitalize the first letter
        }
      })
      .catch((error) => {
        console.error("There was an error fetching user info:", error);
      });
  }, []);
  // const handleLogout = () => {
  //   // Perform logout logic (clear session, etc.)
  //   axios.get("http://localhost/voicedb/logout.php").then(() => {
  //     setIsLoggedIn(false); // Mark as logged out
  //     setFirstLetter(""); // Clear the first letter
  //     navigate("/login"); // Redirect to login page
  //   });
  // };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  fixed-top  ${NavbarCss.container}`}
        style={{ backgroundColor: "black" }}
      >
        <div className="container-md">
          <h3
            className="navbar-brand text-white fs-3 fw-bold ms-3"
            style={{ fontFamily: "lato" }}
          >
            <img
              className="img-responsive me-2"
              src={HeaderLogo}
              alt=""
              style={{
                width: "50px",
                backgroundColor: "#fff",
                borderRadius: "50px",
              }}
            />
            Irai Aligal
          </h3>

          <Link
            to={"/voice"}
            className="fs-2 d-inline d-lg-none text-white"
            style={{ color: "black", marginTop: "-10px" }}
          >
            <IoSearch />
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outline: "none", border: "none", backgroundColor: "#fff" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/voice"} className="nav-link fs-5">
                  <div className="input-group search-input-group">
                    <span
                      className="input-group-text"
                      id="basic-addon1"
                      style={{
                        backgroundColor: "#23232366",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      <IoSearch style={{ color: "#fff" }} />
                    </span>
                    <input
                      type="text"
                      className="form-control ps-3"
                      placeholder="Search Songs"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      style={{
                        width: "400px",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </Link>
              </li>
              {/* Other nav items here */}
            </ul>
            <div className="d-flex justify-content-end">
              {/* <Link
                className="btn text-white  "
                to={"/login"}
                style={{
                  fontFamily: "Lato,sans-serif",
                  fontWeight: "600",
                }}
              >
                Login / Sign Up
              </Link> */}
              {/* <Link
                className="btn text-white"
                to={isLoggedIn ? "#" : "/login"} // Prevent navigation on logout
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "600",
                }}
                onClick={isLoggedIn ? handleLogout : null} // Attach logout logic on click
              >
                {isLoggedIn ? "Logout" : "Login / Sign Up"}
              </Link> */}
            </div>
          </div>
        </div>
      </nav>

      {/*---Offcanvas Design---*/}
      {/* <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title fw-bold fs-3"
            id="offcanvasNavbarLabel"
          >
            Irai Aligal
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          className="offcanvas-body"
          style={{
            backgroundColor: "#2f2f2f",
          }}
        >
          <ul className="navbar-nav justify-content-end flex-grow-1 mt-4 pe-3">
            <Link
              className="btn text-white  "
              to={"/Login"}
              style={{
                fontFamily: "Lato,sans-serif",
                fontWeight: "600",
              }}
              onClick={() => {
                const offcanvasElement =
                  document.getElementById("offcanvasNavbar");
                const offcanvasInstance =
                  bootstrap.Offcanvas.getInstance(offcanvasElement);
                offcanvasInstance.hide();
              }}
            >
              Login / Sign Up
            </Link>

            <Link
              className="btn text-white "
              to={""}
              style={{ fontFamily: "Lato,sans-serif", fontWeight: "600" }}
              onClick={() => {
                const offcanvasElement =
                  document.getElementById("offcanvasNavbar");
                const offcanvasInstance =
                  bootstrap.Offcanvas.getInstance(offcanvasElement);
                offcanvasInstance.hide();
              }}
            >
              Sign Up
            </Link>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
