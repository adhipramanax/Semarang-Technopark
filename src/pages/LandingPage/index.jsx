import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Layanan from "./Layanan";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";
import Card from "./Card";

const index = () => {
  return (
    <>
      <div class="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] h-[100vh] bg-no-repeat-x bg-cover">
        <Navbar auth="/login" title="Login" />
        <Hero />
      </div>
      <Carousel />
      <Layanan />
      <Card />
      <Partners />
      <Footer />
    </>
  );
};

export default index;
