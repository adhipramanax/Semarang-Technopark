import React from "react";

import event from "./testData/event";
import sewaalat from "./testData/sewaAlat";
import coworking from "./testData/coWorking";

const Card = () => {
  const slider = React.useRef();
  const [itemWidth, setItemWidth] = React.useState(0);
  const [scrollPos, setScrollPos] = React.useState(0);
  const [data, setData] = React.useState(event);

  function scrollToRight(e) {
    slider.current.scrollBy(itemWidth, 0);
  }

  function scrollToLeft(e) {
    slider.current.scrollBy(-itemWidth, 0);
  }

  React.useEffect(() => {
    setItemWidth(slider.current.firstChild.childNodes[0].clientWidth);
  }, []);

  function changeTab(e) {
    const name = e.target.getAttribute("id");

    if (name === "event") {
      setData(event);
    } else if (name === "sewa-alat") {
      setData(sewaalat);
    } else if (name === "co-working") {
      setData(coworking);
    }

    e.target.parentElement.childNodes.forEach(function (el) {
      el.classList = " lg:text-xl  text-base  py-2 px-5";
    });

    e.target.classList =
      "text-[#D73737]  lg:text-xl  text-base  border-b-4 border-[#D73737] py-2 px-5";

    slider.current.scrollLeft = 0;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex p-10  text-2xl font-medium">
            <button
              onClick={changeTab}
              id="event"
              className="text-[#D73737] lg:text-xl  text-base border-b-4 border-[#D73737] py-2 px-5"
            >
              Event
            </button>
            <button onClick={changeTab} id="sewa-alat" className="py-2 px-5 lg:text-xl  text-base ">
              Sewa Alat
            </button>
            <button
              onClick={changeTab}
              id="co-working"
              className="py-2 px-5 lg:text-xl  text-base "
            >
              Co-Working
            </button>
          </div>
          <div className="lg:flex justify-center mr-5 hidden">
            <button onClick={scrollToLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button onClick={scrollToRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="h-10 text-[#D73737] "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* card */}
        <div
          className="slider-container overflow-x-auto w-full p-[20px] snap-x overflow-y-hidden scroll-smooth no-scrollbar scroll-p-5"
          ref={slider}
        >
          <div className="slider  flex flex-row   w-full justify-between relative">
            {data.map((d) => {
              return (
                <div
                  className="card mx-5 w-[290px] h-[400px] ease-in snap-start duration-300 hover:scale-105"
                  style={{
                    flex: "0 0 auto",
                  }}
                >
                  <figure>
                    <img
                      className="rounded-[12px] object-cover h-48 w-96"
                      src={`${d.img}`}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body px-2">
                    <div className=" ">
                      <span className="bg-[#04A2FF] text-white rounded-xl px-5">{d.kategori}</span>
                    </div>
                    <span className="text-xl font-medium">{d.judul}</span>
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-[#F08619]"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                          />
                        </svg>
                        {d.tgl}
                      </div>
                      <div className="flex gap-2 m">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 text-[#F08619] "
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {d.jam}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
