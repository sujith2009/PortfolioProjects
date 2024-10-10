import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <div
        className={"container-fluid py-5 px-4"}
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col d-flex justify-content-center">
              <Link to={""}>
                <FaFacebook className="me-3 fs-2" color="#EEEEEE" />
              </Link>
              <Link to={""}>
                <FaInstagramSquare className="me-3 fs-2" color="#EEEEEE" />
              </Link>
              <Link to={""}>
                <FaTwitterSquare className="me-3 fs-2" color="#EEEEEE" />
              </Link>
              <Link to={""}>
                <FaYoutube className="fs-2" color="#EEEEEE" />
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center  mt-3">
            <FaRegCopyright color="#EEEEEE" className="mt-1 me-2" />
            <p style={{ color: "#eeee" }}>
              2024 Irai Aligal Media Limited All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
