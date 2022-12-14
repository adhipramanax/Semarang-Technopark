import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Layanan from "./Layanan";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";
import Card from "./Card";

const Index = () => {
  // const { user, setUser } = useContext(userContext);

  return (
    <>
      <Navbar auth="/login" title="Masuk" />
      <div class="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] h-[600px] lg:h-[794px] bg-no-repeat-x bg-cover">
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

export default Index;
