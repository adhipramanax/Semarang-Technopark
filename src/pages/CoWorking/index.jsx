import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import Jumbotron from "./Jumbotron";

const index = () => {
  return (
    <>
      <div class="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] h-[] bg-no-repeat-x bg-cover">
        <Navbar auth="/login" title="Login" />
        <Jumbotron />
      </div>
      <Footer />
    </>
  );
};

export default index;
