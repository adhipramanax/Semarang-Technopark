import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full justify-center">
            <section className="flex w-[1323px] h-[338px] ">
              <div
                id="carousel-image-1"
                className="w-1/2 bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662993331/Mini%20Project%20SEAL/c-img.png')] bg-no-repeat bg-cover bg-center"
              ></div>
              <div id="carousel-description-1" className="flex flex-col w-1/2 gap-5 p-[18px]">
                <div>
                  <span className="bg-[#F08619] py-[7px] px-[33px] rounded-[14px]">Event</span>
                </div>
                <h3 className="text-[36px]">Food Start Up Challange</h3>
                <p>
                  Food Startup Challenge sendiri merupakan program inkubasi bisnis yang dikemas
                  melalui kompetisi kewirausahaan yang memberikan kesempatan kepada kaum millenial
                  untuk mewujudkan dan .............
                </p>

                <div className="flex justify-between">
                  <span>23 September 2022</span>
                  <span>Lihat Selengkapnya</span>
                </div>
              </div>
              <a href="#slide4" className="absolute left-0 top-[50%] translate-y-[-1/2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
              <a href="#slide2" className="absolute right-0 top-[50%] translate-y-[-1/2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </section>
          </div>
          <div id="slide2" className="carousel-item relative w-full justify-center">
            <section className="flex w-[1323px] h-[338px] ">
              <div
                id="carousel-image-1"
                className="w-1/2 bg-[url('https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662993331/Mini%20Project%20SEAL/c-img.png')] bg-no-repeat bg-cover bg-center"
              ></div>
              <div id="carousel-description-1" className="flex flex-col w-1/2 gap-5 p-[18px]">
                <div>
                  <span className="bg-[#F08619] py-[7px] px-[33px] rounded-[14px]">Event</span>
                </div>
                <h3>Food Start Up Challange</h3>
                <p>
                  Food Startup Challenge sendiri merupakan program inkubasi bisnis yang dikemas
                  melalui kompetisi kewirausahaan yang memberikan kesempatan kepada kaum millenial
                  untuk mewujudkan dan .............
                </p>

                <div className="flex justify-between">
                  <span>23 September 2022</span>
                  <span>Lihat Selengkapnya</span>
                </div>
              </div>
              <a href="#slide1" className="absolute left-0 top-[50%] translate-y-[-1/2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
              <a href="#slide3" className="absolute right-0 top-[50%] translate-y-[-1/2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
