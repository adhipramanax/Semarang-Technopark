import React from "react";

import Navbar from "../../../components/Navbar/Navbar";
import Hero from '../../../components/Hero/HeroAuth'
import Verifikasi from "./verifikasi";
import bgAuth from '../../../assets/images/bg-auth.png';

const index = () => {
    return (
        <>
            <div class="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] h-screen bg-no-repeat bg-cover overflow-hidden">
                <div className="relative z-20 overflow-hidden">
                    <Navbar auth="/login" title="Masuk" />
                    <div className="flex h-[70vh] xl:h-full lg:h-full my-0 xl:my-[100px] lg:my-[50px] z-20 px-4 lg:px-16 xl:px-24 overflow-hidden">
                        <Hero />
                        <Verifikasi />
                    </div>
                </div>
                {/* <img className="hidden xl:block 2xl:block sm:block lg:hidden z-10 top-[5.3rem]" src={bgAuth} alt="background" /> */}
            </div>
        </>
    );
};

export default index;
