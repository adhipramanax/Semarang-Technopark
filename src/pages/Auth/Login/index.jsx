import React, { useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";
import Hero from '../../../components/Hero/HeroAuth'
import Input from "./Input";
import bgAuth from '../../../assets/images/bg-auth.png';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassword] = useState(true)

  const handlePassword = value => {
    setShowPassword(value)
  }

  return (
    <>
      <div class="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] h-screen bg-no-repeat bg-cover overflow-hidden">
        <div className="relative z-20 overflow-hidden">
          <Navbar auth="/register" title="Daftar" />
          <div className="flex z-20 px-4 lg:px-16 xl:px-24 overflow-hidden">
            <Hero />
            <Input password={showPassword} onUpdate={value => { handlePassword(value) }} />
          </div>
        </div>
        {/* <img className="hidden xl:block 2xl:block sm:block lg:hidden z-10 top-[5.3rem]" src={bgAuth} alt="background" /> */}
      </div>
    </>
  );
};

export default index;
