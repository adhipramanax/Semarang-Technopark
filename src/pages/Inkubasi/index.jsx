import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero";
import Collapse from "./InkubasiCollapse";
import Mentor from "./Mentor";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";

import mentor from "../../assets/images/mentor-inkubasi.png";

const index = () => {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] h-full lg:h-screen bg-no-repeat-x bg-cover">
        <Navbar auth="/login" title="login" />
        <Hero />
      </div>
      <div className="lg:bg-[url('https://res.cloudinary.com/dna8dexwi/image/upload/v1663053941/semarang-technopark/inkubasi-bg_psxrpd.png')] bg-[#F6F6F6] flex flex-col justify-center items-center p-10 py-14 ">
        <h1 className="lg:text-4xl font-bold text-2xl sm:text-3xl md:text-4xl">Apa Itu Inkubasi</h1>
        <h1 className="lg:text-4xl font-bold text-red-600 mb-3 text-2xl sm:text-3xl md:text-4xl">
          Semarang Technopark
        </h1>
        <Collapse
          title="Tentang Inkubasi"
          detail="Inkubasi adalah suatu proses pembinaan, pendampingan, dan pengembangan yang diberikan oleh inkubator bisnis kepada peserta inkubasi (tenant). "
        />
        <Collapse
          title="Durasi Benefit"
          detail="Inkubasi adalah suatu proses pembinaan, pendampingan, dan pengembangan yang diberikan oleh inkubator bisnis kepada peserta inkubasi (tenant). "
        />
        <Collapse
          title="Benefit Inkubasi"
          detail="Inkubasi adalah suatu proses pembinaan, pendampingan, dan pengembangan yang diberikan oleh inkubator bisnis kepada peserta inkubasi (tenant). "
        />
        <Collapse
          title="Akses Tenant"
          detail="Inkubasi adalah suatu proses pembinaan, pendampingan, dan pengembangan yang diberikan oleh inkubator bisnis kepada peserta inkubasi (tenant). "
        />
      </div>
      <div className="py-10">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
          Siapa Saja Mentor
        </h1>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-red-600">
          di Semarang Technopark
        </h1>
        <div className="w-full flex flex-wrap gap-5 justify-center py-10">
          <Mentor img={mentor} name="Verdian Galang Pratama" role="UI/UX Designer" />
          <Mentor img={mentor} name="Verdian Galang Pratama" role="UI/UX Designer" />
          <Mentor img={mentor} name="Verdian Galang Pratama" role="UI/UX Designer" />
          <Mentor img={mentor} name="Verdian Galang Pratama" role="UI/UX Designer" />
          <Mentor img={mentor} name="Verdian Galang Pratama" role="UI/UX Designer" />
          <Mentor img={mentor} name="Verdian Galang Pratama" role="UI/UX Designer" />
        </div>
      </div>
      <div className="lg:bg-[#F6F6F6] lg:py-12 lg:px-28 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center py-10 px-10 items-center rounded-3xl lg:w-[1000px] lg:h-[280px] bg-[#EE1E14] lg:bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')]">
          <h1 className="lg:text-6xl text-3xl font-bold text-white">Segera Daftarkan</h1>
          <button className="text-red-600 font-semibold py-3 rounded-xl bg-white mt-3 lg:mt-8 w-48 hover:bg-red-50">
            Register
          </button>
        </div>
      </div>
      <Partners />
      <Footer />
    </>
  );
};

export default index;
