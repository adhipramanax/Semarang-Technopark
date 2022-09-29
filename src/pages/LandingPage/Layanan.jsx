import React from "react";
import layanan from "../../assets/images/layanan.png";
import icon1 from "../../assets/images/layanan1.png";
import icon2 from "../../assets/images/layanan2.png";
import icon3 from "../../assets/images/layanan3.png";
import icon4 from "../../assets/images/layanan4.png";

const Layanan = () => {
  const lay = [
    {
      judul: "Inkubasi",
      des: "Inkubator Bisnis sebagai fasilitator pendampingan calon StartUp untuk pengembangan usaha. ",
      img: icon1,
    },
    {
      judul: "Co-Working Space",
      des: "Ruang kerja baru dimana Semarang Tehcnopark menyediakan beberapa Co-Working Space. ",
      img: icon2,
    },
    {
      judul: "Event & Pelatihan",
      des: "Terdapat pelatihan dan event yang akan menunjang skill untuk pengembangan talent ataupun tenant. ",
      img: icon3,
    },
    {
      judul: "Sewa Alat ",
      des: "Semarang Technopark Menyediakan sewa alat untuk kebutuhan para talent dan tenant. ",
      img: icon4,
    },
  ];
  return (
    <>
      <div id="layanan" className="bg-[#F6F6F6] lg:py-24 lg:my-20 py-4 ">
        <div className="container mx-auto lg:px-6 lg:flex ">
          <div className="lg:w-1/2 w-full flex flex-col gap-3 lg:pr-8">
            <div className="flex gap-2 justify-center ">
              <span className="bg-[#F08619] h-9 w-1 lg:block hidden">&nbsp;</span>
              <div className="lg:mx-0 px-11  lg:gap-0 lg:p-0  py-4">
                <div className="flex gap-2 lg:hidden ">
                  <span className="bg-[#F08619] h-9 w-1">&nbsp;</span>
                  <h1 className="text-4xl font-medium ">Layanan Kami</h1>
                </div>

                <h1 className="text-4xl font-medium lg:block hidden">Layanan</h1>
                <p className="text-sm ">
                  Semarang Technopark memeberikan beberapa layanan dalam berusaha mengembangkan
                  Start Up di semarang dengan beberapa program, jasa, & office space.
                </p>
              </div>
            </div>
            <img className="w-full px-10 hidden lg:block" src={layanan} alt="layanan" />
          </div>
          <div className="w-full lg:w-1/2 flex gap-2 lg:gap-7 px-10 lg:p-0 flex-col ">
            {lay.map((lays) => {
              return (
                <div className="flex bg-white p-3 rounded-3xl gap-5 lg:gap-6 ease-in duration-300 hover:scale-105">
                  <img className="w-[56px] lg:w-[97px]" src={`${lays.img}`} alt="icon" />
                  <div className="flex justify-center flex-col pr-6">
                    <h1 className="text-xl lg:text-2xl font-medium">{lays.judul}</h1>
                    <p className="text-sm font-normal hidden lg:block">{lays.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <img className="w-full px-10 pt-10 block lg:hidden" src={layanan} alt="layanan" />
        </div>
      </div>
    </>
  );
};

export default Layanan;
