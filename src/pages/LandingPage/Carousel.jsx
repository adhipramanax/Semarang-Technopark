import React, { useEffect, useState } from "react";

const Carousel = () => {
  const list = [
    {
      imageUrl:
        "https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662993331/Mini%20Project%20SEAL/c-img.png",
      title: "Food Start Up Challange",
      description:
        "Food Startup Challenge sendiri merupakan program inkubasi bisnis yang dikemas melalui kompetisi kewirausahaan yang memberikan kesempatan kepada kaum millenial untuk mewujudkan dan .............",
      date: "23 September 2022",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dhuvbrmgg/image/upload/v1663092366/Mini%20Project%20SEAL/pelatihan.png",
      title: "Panji",
      description:
        "Food Startup Challenge sendiri merupakan program inkubasi bisnis yang dikemas melalui kompetisi kewirausahaan yang memberikan kesempatan kepada kaum millenial untuk mewujudkan dan .............",
      date: "23 September 2022",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dhuvbrmgg/image/upload/v1663092367/Mini%20Project%20SEAL/seminar1.jpg",
      title: "Thomi",
      description:
        "Food Startup Challenge sendiri merupakan program inkubasi bisnis yang dikemas melalui kompetisi kewirausahaan yang memberikan kesempatan kepada kaum millenial untuk mewujudkan dan .............",
      date: "23 September 2022",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662194083/Mini%20Project%20SEAL/bg1.png",
      title: "Thuma",
      description:
        "Food Startup Challenge sendiri merupakan program inkubasi bisnis yang dikemas melalui kompetisi kewirausahaan yang memberikan kesempatan kepada kaum millenial untuk mewujudkan dan .............",
      date: "23 September 2022",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dhuvbrmgg/image/upload/v1662993331/Mini%20Project%20SEAL/c-img.png",
      title: "Udin",
      description:
        "Food Startup Challenge sendiri merupakan program inkubasi bisnis yang dikemas melalui kompetisi kewirausahaan yang memberikan kesempatan kepada kaum millenial untuk mewujudkan dan .............",
      date: "23 September 2022",
    },
  ];

  let autoSlider;
  const listLength = list.length;
  const duration = 5000;
  const carousel = React.useRef();

  const [number, setNumber] = useState(0);
  const [specWidth, setSpecWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(2000);

  const nextSlide = () => {
    if (number >= listLength - 1) {
      return;
    }
    setNumber(number + 1);
  };

  const prevSlide = () => {
    if (number < 1) {
      return;
    }
    setNumber(number - 1);
  };

  const autoChangeSlide = () => {
    autoSlider = setInterval(() => {
      setNumber((number) => {
        if (number >= listLength - 1) {
          return 0;
        }
        return number + 1;
      });
    }, duration);
  };

  useEffect(() => {
    setSpecWidth(carousel.current.offsetWidth);
    clearInterval(autoSlider);
    autoChangeSlide();

    carousel.current.addEventListener("mouseenter", function () {
      clearInterval(autoSlider);
    });

    carousel.current.addEventListener("mouseleave", function () {
      clearInterval(autoSlider);
      autoChangeSlide();
    });

    function updateSize() {
      let clientWidth = document.documentElement.clientWidth;
      setWindowWidth(clientWidth);

      console.log(clientWidth);

      if (clientWidth <= 1323) {
        carousel.current.classList = "caro max-w-[2000px] mx-auto relative";
        carousel.current.parentElement.classList = "caro-wrapper py-14 mx-[32px] min-h-[200px]";
        carousel.current.setAttribute("data-only-image", "true");
        carousel.current.querySelector(".arrow-left").classList =
          "arrow-left absolute left-[0] top-[50%] translate-y-[-1/2]";
        carousel.current.querySelector(".arrow-right").classList =
          "arrow-right absolute right-[0] top-[50%] translate-y-[-1/2]";

        if (clientWidth <= 425) {
          carousel.current.classList = "caro max-w-[320px] mx-auto relative";
        }

        setSpecWidth(carousel.current.offsetWidth);
        return;
      }

      carousel.current.classList = "caro w-[1323px] mx-auto relative";
      carousel.current.setAttribute("data-only-image", "false");
      carousel.current.querySelector(".arrow-left").classList =
        "arrow-left absolute left-[-40px] top-[50%] translate-y-[-1/2]";
      carousel.current.querySelector(".arrow-right").classList =
        "arrow-right absolute right-[-40px] top-[50%] translate-y-[-1/2]";
      setSpecWidth(carousel.current.offsetWidth);
    }

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      clearInterval(autoSlider);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <>
      <div className="caro-wrapper py-14">
        <div className={`caro w-[1323px] mx-auto relative`} data-only-image="false" ref={carousel}>
          <div className="flex gap-3 mb-10 ">
            <span className="bg-[#F08619] h-9 w-1">&nbsp;</span>
            <span className="lg:text-4xl text-xl font-medium ">
              Highlight <span className="text-[#CD0606] -"> Semarang Technopark</span>
            </span>
          </div>
          <div className="slides-container  h-[294px] relative overflow-hidden">
            <div
              className={`flex h-full transition-all duration-1000`}
              style={{
                transform: `translate(-${specWidth * number}px)`,
                width: `${listLength}00%`,
              }}
            >
              {list.map((data, i) => {
                return (
                  <article key={i} className="flex w-full h-full">
                    <div
                      id={`carousel-${i}`}
                      className={"w-1/2 bg-no-repeat bg-cover bg-center carousel-image"}
                      style={{
                        backgroundImage: "url('" + data.imageUrl + "')",
                      }}
                    ></div>
                    <div
                      id={`carousel-desc-${i}`}
                      className="desc-caro flex flex-col w-1/2 gap-5 p-[18px]"
                    >
                      <div>
                        <span className="bg-[#F08619] py-[7px] px-[33px] rounded-[14px]">
                          Event
                        </span>
                      </div>
                      <h3 className="text-[36px]">{data.title}</h3>
                      <p>{data.description}</p>

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
                          {data.date}
                        </span>
                        <a className="link-hover text-[#CD0606]" href="/">
                          Lihat Selengkapnya
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          {/* Button */}
          <button
            onClick={() => {
              prevSlide();
            }}
            className="arrow-left absolute left-[-40px] top-[50%] translate-y-[-1/2]"
          >
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
          </button>
          <button
            onClick={() => {
              nextSlide();
            }}
            className="arrow-right absolute right-[-40px] top-[50%] translate-y-[-1/2]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-10 h-10 text-[#F08619]"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="w-full">
            <div className="flex justify-center gap-2 mt-5">
              {list.map((data, i) => {
                if (number == i) {
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setNumber(i);
                      }}
                      className="dot rounded-full w-[50px] h-[14px] bg-[#CD0606] transition-all duration-1000"
                    ></button>
                  );
                }

                return (
                  <button
                    key={i}
                    onClick={() => {
                      setNumber(i);
                    }}
                    className="dot rounded-full w-[14px] h-[14px] bg-[#DEDEDE] transition-all duration-1000"
                  ></button>
                );
              })}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Carousel;
