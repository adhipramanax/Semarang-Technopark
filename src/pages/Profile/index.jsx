import React from "react";
import Hero from "./Hero";
import About from "./About";
import VisiMisi from "./VisiMisi";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

import stp from "../../assets/images/stp.png";
import inkubasi from "../../assets/images/inkubasi.png";
import fasilitas from "../../assets/images/fasilitas.png";

const index = () => {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/dna8dexwi/image/upload/v1662981768/semarang-technopark/bg-profile_ywzpvs.png')] h-[70vh] lg:h-screen bg-no-repeat bg-cover">
        <Navbar auth="/login" title="Login" />
        <Hero />
      </div>
      <section className="p-8 lg:py-16 lg:px-28 lg:flex lg:w-full lg:justify-between lg:items-center md:flex md:w-full md:justify-between md:items-center">
        <div className="leading-loose lg:w-1/2">
          <h5 className="text-[#D73737]">ABOUT</h5>
          <h1 className="text-2xl font-bold lg:text-4xl md:text-3xl">
            Tujuan Berdirinya{" "}
            <span className="text-[#CD0606]">Semarang Technopark</span>
          </h1>
          <p className="text-sm">
            Tujuan utama pembuatan Semarang Technopark antaralain:
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="flex items-center gap-3 py-3">
            <img src={stp} alt="" />
            <p className="text-justify">
              Merangsang dan mengelola arus pengetahuan dan teknologi di
              universitas, lembaga litbang, dan industri yang berada di
              lingkungan STP
            </p>
          </div>
          <div className="flex items-center gap-3 py-3">
            <img src={inkubasi} alt="" />
            <p className="text-justify">
              Memfasilitasi penciptaan dan pertumbuhan perusahaan berbasis
              inovasi melalui proses inkubasi dan spin off
            </p>
          </div>
          <div className="flex items-center gap-3 py-3">
            <img src={fasilitas} alt="" />
            <p className="text-justify">
              menyediakan layanan peningkatan nilai tambah melalui penyediaan
              ruang dan fasilitas pendukung berkualitas tinggi
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#EE1E14]">
        <div className="flex flex-wrap w-full justify-center gap-y-10 py-16">
          <About
            img="https://res.cloudinary.com/dna8dexwi/image/upload/v1663002765/semarang-technopark/start-up_muenov.png"
            total="12"
            name="Start Up"
          />
          <About
            img="https://res.cloudinary.com/dna8dexwi/image/upload/v1663002748/event_vkyr1q.png"
            total="34"
            name="Event"
          />
          <About
            img="https://res.cloudinary.com/dna8dexwi/image/upload/v1663002748/coworking-space_gtj6ru.png"
            total="56"
            name="Coworking Space"
          />
          <About
            img="https://res.cloudinary.com/dna8dexwi/image/upload/v1663002747/mentor_wb5acj.png"
            total="21"
            name="Mentor"
          />
          <About
            img="https://res.cloudinary.com/dna8dexwi/image/upload/v1663002747/product_pixlfm.png"
            total="90"
            name="Product"
          />
        </div>
      </div>
      <section>
        <VisiMisi />
      </section>
      <Partners />
      <Footer />
    </>
  );
};

export default index;
