import React from "react";

const VisiMisi = () => {
  return (
    <>
      <div className="p-8 lg:pt-16 lg:px-28 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-x-10 ">
        <div className="lg:order-2 lg:flex lg:flex-col lg:items-start lg:self-center">
          <h5 className="text-[#D73737]">Visi & Misi</h5>
          <h1 className="text-2xl font-semibold lg:text-4xl">Mimpi Besarmu</h1>
          <h1 className="text-2xl font-semibold text-[#CD0606] lg:text-4xl">
            Dimulai Disini
          </h1>
        </div>
        <div className="lg:row-span-3 lg:order-1 lg:place-self-center lg:w-full">
          <img
            src="https://res.cloudinary.com/dna8dexwi/image/upload/v1663005562/visi-misi_bwboym.png"
            alt=""
          />
        </div>
        <div className="py-3 lg:order-last lg:row-span-2">
          <p>
            <span className="text-[#D73737] font-semibold">
              Semarang Technopark{" "}
            </span>
            merupakan kawadan yang terdiri atas satu atau lebih sentra IPTEKIN,
            kegiatan produktif dan gerakan masyarakat pada wilayah tertentu.
            Semarang Technopark berungsi sebagai penyelenggara riset dan
            pengembangan teknologi dan bisnis yang berkelanjutan, menumbuh
            kembangkan perusahaan pemula berbasis teknologi, dan memfasilitasi
            industri untuk memanfaatkan layanan di kawasan Semarang Technopark
          </p>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
