import React from "react";
import NavbarFixedCss from "../NavbarFixedBottom/Navbarfixb.module.css";

const Navbarfixb = () => {
  return (
    <div>
      <nav class="navbar fixed-bottom bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Fixed bottom
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbarfixb;
