/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";
import Hero from '../../../components/Hero/HeroAuth'
import Input from "./input";

const index = () => {
  const [showPassword, setShowPassword] = useState(true)
  const [showUlangPassword, setShowUlangPassword] = useState(true)

  const handlePassword = value => {
    setShowPassword(value)
  }

  const handleUlangPassword = value => {
    setShowUlangPassword(value)
  }

  return (
    <>
      <div class="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] h-screen bg-no-repeat bg-cover overflow-hidden">
        <div className="relative z-20 overflow-hidden">
          <Navbar auth="/login" title="Masuk" />
          <div className="flex z-20 px-4 lg:px-12 xl:px-24 overflow-hidden">
            <Hero />
            <Input password={showPassword} ulangPassword={showUlangPassword} onUpdateP={value => { handlePassword(value) }} onUpdateUP={value => { handleUlangPassword(value) }} />
          </div>
        </div>
        {/* <img className="hidden xl:block 2xl:block sm:block lg:hidden z-10 top-[5.3rem]" src={bgAuth} alt="background" /> */}
      </div>
    </>
  );
};

export default index;
