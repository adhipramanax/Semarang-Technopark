import React from "react";

const Carousel = () => {
  const changePoint = (e) => {
    const dots = document.querySelectorAll("a.dot");

    dots.forEach(function (el) {
      el.classList = "dot rounded-full w-[14px] h-[14px] bg-[#DEDEDE]";
    });

    e.target.classList = "dot rounded-full w-[50px] h-[14px] bg-[#CD0606]";
  };

  return (
    <>
      <div className="container mx-auto lg:py-10">
        <div className="flex gap-3 py-5 lg:px-24">
          <span className="bg-[#F08619] h-9 w-1">&nbsp;</span>
          <span className="text-4xl font-medium ">
            Highlight <span className="text-[#CD0606]"> Semarang Technopark</span>
          </span>
        </div>
        {/* batas */}
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
                  <span className="flex gap-2 font-bold">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-6 h-6 text-[#F08619]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    23 September 2022
                  </span>
                  <a className="link-hover text-[#CD0606]" href="/">
                    Lihat Selengkapnya
                  </a>
                </div>
              </div>
              <a href="#slide4" className="absolute left-0 top-[50%] translate-y-[-1/2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-10 h-10 text-[#F08619]"
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
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-10 h-10 text-[#F08619]"
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
                  <span className="flex gap-2 font-bold">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-6 h-6 text-[#F08619]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    23 September 2022
                  </span>
                  <a className="link-hover text-[#CD0606]" href="/">
                    Lihat Selengkapnya
                  </a>
                </div>
              </div>
              <a href="#slide1" className="absolute left-0 top-[50%] translate-y-[-1/2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-10 h-10 text-[#F08619]"
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
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-10 h-10 text-[#F08619]"
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
        <div className="w-full">
          <div className="flex justify-center gap-2">
            <a href="#slide1" className="dot rounded-full w-[14px] h-[14px] bg-[#DEDEDE]"></a>
            <a href="#slide2" className="dot rounded-full w-[14px] h-[14px] bg-[#DEDEDE]"></a>
            <a href="#slide3" className="dot rounded-full w-[50px] h-[14px] bg-[#CD0606]"></a>
            <a href="#slide4" className="dot rounded-full w-[14px] h-[14px] bg-[#DEDEDE]"></a>
            <a href="#slide5" className="dot rounded-full w-[14px] h-[14px] bg-[#DEDEDE]"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
