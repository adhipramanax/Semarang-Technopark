import React from "react";
// import { Link } from "react-router-dom";

import Navbar from "../../../components/Navbar/Navbar";
import Input from "./Input";

const index = () => {
  return (
    <>
      <div class="container mx-auto bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] h-[100vh] bg-no-repeat-x bg-cover">
        <Navbar auth="/register" title="Register" />
        <div className="flex justify-between items-center px-24">
          <span></span>
          <Input />
        </div>
      </div>
    </>
  );
};

export default index;
