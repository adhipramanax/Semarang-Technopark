import React from "react";
import layanan from "../../assets/images/layanan.png";
import icon1 from "../../assets/images/layanan1.png";
import icon2 from "../../assets/images/layanan2.png";
import icon3 from "../../assets/images/layanan3.png";
import icon4 from "../../assets/images/layanan4.png";

const Layanan = () => {
  return (
    <>
      <div className="bg-[#F6F6F6] py-24 my-20">
        <div className="container mx-auto flex ">
          <div className="w-1/2 flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="bg-[#F08619] h-9 w-1">&nbsp;</span>
              <div>
                <h1 className="text-4xl font-medium">Layanan Kami</h1>
                <p className="text-sm">
                  Semarang Technopark memeberikan beberapa layanan dalam berusaha mengembangkan
                  Start Up di semarang dengan beberapa program, jasa, & office space.
                </p>
              </div>
            </div>
            <img className="w-full px-10" src={layanan} alt="layanan" />
          </div>
          <div className="w-1/2 flex gap-10 flex-col">
            <div className="flex bg-white p-3 rounded-3xl gap-6 ">
              <img src={icon1} alt="icon" />
              <div className="flex justify-center flex-col pr-6">
                <h1 className=" text-2xl font-medium">Inkubasi</h1>
                <p className="text-sm font-normal">
                  Inkubator Bisnis sebagai fasilitator pendampingan calon StartUp untuk pengembangan
                  usaha.
                </p>
              </div>
            </div>
            <div className="flex bg-white p-3 rounded-3xl gap-6 ">
              <img src={icon2} alt="icon" />
              <div className="flex justify-center flex-col pr-6">
                <h1 className=" text-2xl font-medium">Co-Working Space</h1>
                <p className="text-sm font-normal">
                  Ruang kerja baru dimana Semarang Tehcnopark menyediakan beberapa Co-Working Space.
                </p>
              </div>
            </div>
            <div className="flex bg-white p-3 rounded-3xl gap-6 ">
              <img src={icon3} alt="icon" />
              <div className="flex justify-center flex-col pr-6">
                <h1 className=" text-2xl font-medium">Event & Pelatihan</h1>
                <p className="text-sm font-normal">
                  Terdapat pelatihan dan event yang akan menunjang skill untuk pengembangan talent
                  ataupun tenant.
                </p>
              </div>
            </div>
            <div className="flex bg-white p-3 rounded-3xl gap-6 ">
              <img src={icon4} alt="icon" />
              <div className="flex justify-center flex-col pr-6">
                <h1 className=" text-2xl font-medium">Sewa Alat</h1>
                <p className="text-sm font-normal">
                  Semarang Technopark Menyediakan sewa alat untuk kebutuhan para talent dan tenant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layanan;
