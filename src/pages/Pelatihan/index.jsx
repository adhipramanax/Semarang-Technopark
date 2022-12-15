import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Filter from "./Filter";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import Card from "./Card";
import pelatihan from "../../assets/images/pelatihan-gambar.png";
import box from "../../assets/images/box.svg";

const Index = () => {
  const tipePelatihan = ["Online", "Offline"];
  const Harga = ["Gratis", "Berbayar"];

  return (
    <>
      <div class="bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662816138/Mini%20Project%20SEAL/bg-red.png')] bg-no-repeat-x bg-cover">
        <Navbar auth="/login" title="Masuk" />
        <Jumbotron
          judul="Pelatihan"
          desc="Semarang Technopark menyediakan beberapa pelatihan untuk di ikuti!"
          img={box}
        />
      </div>
      <div className="block xl:flex lg:flex px-5 xl:px-[108px] lg:px-[48px] w-full gap-8 py-5 xl:py-16 lg:py-16">
        <div className="w-full xl:w-[20%] lg:w-[20%] ">
          <h1 className="text-base xl:text-2xl lg:text-2xl font-medium">Filter Pencarian</h1>
          <Filter tipePelatihan={tipePelatihan} harga={Harga} />
        </div>
        <div className="block xl:hidden lg:hidden h-[3px] w-full mx-auto bg-[#D9D9D9] mt-5"></div>
        <div className="w-full xl:w-[80%] lg:w-[80%] mt-10 xl:mt-0">
          <h1 className="text-2xl font-medium">Menampilkan 9 hasil</h1>
          <div className="grid grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 gap-3 xl:gap-5 lg:gap-5 mt-8">
            <Card
              judul="Pelatihan Design Grafis"
              price="Rp. 1.250.000 / Bulan"
              lokasi="Semarang Technopark"
              kategori="Elektronik"
              img={pelatihan}
            />
            <Card
              judul="Pelatihan Design Grafis"
              price="Rp. 1.250.000 / Bulan"
              lokasi="Semarang Technopark"
              kategori="Elektronik"
              img={pelatihan}
            />
            <Card
              judul="Pelatihan Design Grafis"
              price="Rp. 1.250.000 / Bulan"
              lokasi="Semarang Technopark"
              kategori="Elektronik"
              img={pelatihan}
            />
            <Card
              judul="Pelatihan Design Grafis"
              price="Rp. 1.250.000 / Bulan"
              lokasi="Semarang Technopark"
              kategori="Elektronik"
              img={pelatihan}
            />
            <Card
              judul="Pelatihan Design Grafis"
              price="Rp. 1.250.000 / Bulan"
              lokasi="Semarang Technopark"
              kategori="Elektronik"
              img={pelatihan}
            />
            <Card
              judul="Pelatihan Design Grafis"
              price="Rp. 1.250.000 / Bulan"
              lokasi="Semarang Technopark"
              kategori="Elektronik"
              img={pelatihan}
            />
            <Card
              judul="Pelatihan Design Grafis"
              price="Rp. 1.250.000 / Bulan"
              lokasi="Semarang Technopark"
              kategori="Elektronik"
              img={pelatihan}
            />
            <Card
              judul="Pelatihan Design Grafis"
              price="Rp. 1.250.000 / Bulan"
              lokasi="Semarang Technopark"
              kategori="Elektronik"
              img={pelatihan}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
