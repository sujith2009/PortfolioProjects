import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Songs from "../Songs/Songs";
import Footer from "../Footer/Footer";
import AboutTwo from "../AboutTwo/AboutTwo";
const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Songs /> */}
      <AboutTwo />
      <Footer />
    </div>
  );
};

export default Home;
