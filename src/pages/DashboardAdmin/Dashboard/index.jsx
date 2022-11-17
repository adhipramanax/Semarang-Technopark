import React, { useState } from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import CanvasJSReact from "../../../assets/js/canvasjs.react";
import { useEffect } from "react";
import Event from "./Event";
import Wrapper from "../../../components/Wrapper/Wrapper";
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Index = () => {
  let arr = [];
  const [jumlah, setJumlah] = useState(0);

  const Bar = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title: {
      text: "Statistik Pendaftaran Tenant",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 71 },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 92, indexLabel: "Highest" },
        ],
      },
    ],
  };

  const Pie = {
    animationEnabled: true,
    title: {
      text: "Customer Satisfaction",
    },
    subtitles: [
      {
        text: `${jumlah} orang`,
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Unsatisfied", y: 5 },
          { name: "Very Unsatisfied", y: 31 },
          { name: "Very Satisfied", y: 40 },
        ],
      },
    ],
  };

  Pie.data.map((res) => {
    res.dataPoints.map((result) => {
      arr.push(result.y);
    });
  });

  const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  useEffect(() => {
    setJumlah(sumWithInitial);
  }, [sumWithInitial]);

  return (
    <>
      <div className="flex bg-[#f9f9f9]">
        <Sidebar />
        <Wrapper>
          {/* <div className="w-full ml-64"> */}
          <NavbarDashboard judul="Dashboard Admin" />
          <div className="flex gap-5 mx-6 mt-20 rounded-lg">
            <div className="w-[60%] rounded-lg">
              <div className="flex gap-4 flex-nowrap snap-x overflow-x-scroll snap-mandatory scroll-pl-12 no-scrollbar">
                <div
                  className={`bg-white flex flex-col rounded-lg justify-center items-center border-b-[10px] border-b-[#CD0606] px-2 gap-2 text-center py-8 snap-center snap-always`}
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9375 5.27085L8.39587 13.4583C4.37504 16.0833 4.37504 21.9583 8.39587 24.5833L20.9375 32.7708C23.1875 34.25 26.8959 34.25 29.1459 32.7708L41.625 24.5833C45.625 21.9583 45.625 16.1042 41.625 13.4792L29.1459 5.29168C26.8959 3.79168 23.1875 3.79168 20.9375 5.27085Z"
                      stroke={`#CD0606`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.7292 27.25L11.7084 37.0208C11.7084 39.6667 13.75 42.5 16.25 43.3333L22.8959 45.5417C24.0417 45.9167 25.9375 45.9167 27.1042 45.5417L33.75 43.3333C36.25 42.5 38.2917 39.6667 38.2917 37.0208V27.3542"
                      stroke={`#CD0606`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M44.5834 31.25V18.75"
                      stroke={`#CD0606`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg w-[148px]">Tenant Aktif</p>
                  <h1 className="font-bold text-4xl">30</h1>
                </div>
                <div
                  className={`bg-white flex flex-col rounded-lg justify-center items-center border-b-[10px] border-b-[#F08619] px-2 gap-2 text-center py-8 snap-center snap-always`}
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9375 5.27085L8.39587 13.4583C4.37504 16.0833 4.37504 21.9583 8.39587 24.5833L20.9375 32.7708C23.1875 34.25 26.8959 34.25 29.1459 32.7708L41.625 24.5833C45.625 21.9583 45.625 16.1042 41.625 13.4792L29.1459 5.29168C26.8959 3.79168 23.1875 3.79168 20.9375 5.27085Z"
                      stroke={`#F08619`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.7292 27.25L11.7084 37.0208C11.7084 39.6667 13.75 42.5 16.25 43.3333L22.8959 45.5417C24.0417 45.9167 25.9375 45.9167 27.1042 45.5417L33.75 43.3333C36.25 42.5 38.2917 39.6667 38.2917 37.0208V27.3542"
                      stroke={`#F08619`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M44.5834 31.25V18.75"
                      stroke={`#F08619`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg w-[148px]">Mentor Aktif</p>
                  <h1 className="font-bold text-4xl">50</h1>
                </div>
                <div
                  className={`bg-white flex flex-col rounded-lg justify-center items-center border-b-[10px] border-b-[#56A10E] px-2 gap-2 text-center py-8 snap-center snap-always`}
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9375 5.27085L8.39587 13.4583C4.37504 16.0833 4.37504 21.9583 8.39587 24.5833L20.9375 32.7708C23.1875 34.25 26.8959 34.25 29.1459 32.7708L41.625 24.5833C45.625 21.9583 45.625 16.1042 41.625 13.4792L29.1459 5.29168C26.8959 3.79168 23.1875 3.79168 20.9375 5.27085Z"
                      stroke={`#56A10E`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.7292 27.25L11.7084 37.0208C11.7084 39.6667 13.75 42.5 16.25 43.3333L22.8959 45.5417C24.0417 45.9167 25.9375 45.9167 27.1042 45.5417L33.75 43.3333C36.25 42.5 38.2917 39.6667 38.2917 37.0208V27.3542"
                      stroke={`#56A10E`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M44.5834 31.25V18.75"
                      stroke={`#56A10E`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg w-[148px]">Juri Aktif</p>
                  <h1 className="font-bold text-4xl">100</h1>
                </div>
                <div
                  className={`bg-white flex flex-col rounded-lg justify-center items-center border-b-[10px] border-b-[#56A10E] px-2 gap-2 text-center py-8 snap-center snap-always`}
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9375 5.27085L8.39587 13.4583C4.37504 16.0833 4.37504 21.9583 8.39587 24.5833L20.9375 32.7708C23.1875 34.25 26.8959 34.25 29.1459 32.7708L41.625 24.5833C45.625 21.9583 45.625 16.1042 41.625 13.4792L29.1459 5.29168C26.8959 3.79168 23.1875 3.79168 20.9375 5.27085Z"
                      stroke={`#56A10E`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.7292 27.25L11.7084 37.0208C11.7084 39.6667 13.75 42.5 16.25 43.3333L22.8959 45.5417C24.0417 45.9167 25.9375 45.9167 27.1042 45.5417L33.75 43.3333C36.25 42.5 38.2917 39.6667 38.2917 37.0208V27.3542"
                      stroke={`#56A10E`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M44.5834 31.25V18.75"
                      stroke={`#56A10E`}
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg w-[148px]">Juri Aktif</p>
                  <h1 className="font-bold text-4xl">100</h1>
                </div>
              </div>
              <div className="flex gap-4 flex-nowrap snap-x overflow-x-scroll snap-mandatory no-scrollbar mt-12">
                <div
                  className={`bg-white flex rounded-lg justify-center items-center border-l-[8px] border-l-[#015AA8] px-5 gap-2 py-2 snap-center snap-always`}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7833 4.70007L5.23335 13.9501C3.93335 14.9835 3.09999 17.1669 3.38333 18.8002L5.59997 32.0668C5.99997 34.4335 8.26665 36.3503 10.6667 36.3503H29.3333C31.7167 36.3503 34 34.4168 34.4 32.0668L36.6167 18.8002C36.8833 17.1669 36.05 14.9835 34.7666 13.9501L23.2166 4.71675C21.4333 3.28342 18.55 3.2834 16.7833 4.70007Z"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.4667 23.9671C18.5833 21.9504 21.4167 21.9504 23.5333 23.9671"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.0666 20.4336C26.1666 19.5503 25.1666 18.867 24.1333 18.367C21.4833 17.1003 18.5166 17.1003 15.85 18.367C14.8166 18.867 13.8333 19.5503 12.9166 20.4336"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-line
                      join="round"
                    />
                    <path
                      d="M19.9925 28.3333H20.0075"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col w-[120px] ml-5">
                    <p className="text-lg">Tenant Aktif</p>
                    <h1 className="font-bold text-2xl">30</h1>
                  </div>
                </div>
                <div
                  className={`bg-white flex rounded-lg justify-center items-center border-l-[8px] border-l-[#F08619] px-5 gap-2 py-2 snap-center snap-always`}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.33335 5.99994L15.5 33.9999C16.1667 35.4999 17.3333 35.6666 18.3333 34.3333L34 14.4999C34.5 13.8333 34.5 12.8333 33.8333 12.3333L28.6667 7.16661C28.5 6.83327 28 6.66661 27.8334 6.66661L6.16668 3.83327C4.66668 3.49994 3.83335 4.49994 4.33335 5.99994Z"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.6667 35.0002L18.3333 16.6668L5 4.8335"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.3334 6.6665L18.3334 16.6665L33.3334 13.6665"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col w-[120px] ml-5">
                    <p className="text-lg">Mentor Aktif</p>
                    <h1 className="font-bold text-2xl">50</h1>
                  </div>
                </div>
                <div
                  className={`bg-white flex rounded-lg justify-center items-center border-l-[8px] border-l-[#56A10E] px-5 gap-2 py-2 snap-center snap-always`}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.33335 5.99994L15.5 33.9999C16.1667 35.4999 17.3333 35.6666 18.3333 34.3333L34 14.4999C34.5 13.8333 34.5 12.8333 33.8333 12.3333L28.6667 7.16661C28.5 6.83327 28 6.66661 27.8334 6.66661L6.16668 3.83327C4.66668 3.49994 3.83335 4.49994 4.33335 5.99994Z"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.6667 35.0002L18.3333 16.6668L5 4.8335"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.3334 6.6665L18.3334 16.6665L33.3334 13.6665"
                      stroke="#1C1B1E"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col w-[120px] ml-5">
                    <p className="text-lg">Juri Aktif</p>
                    <h1 className="font-bold text-2xl">100</h1>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-5 mt-14">
                <CanvasJSChart
                  options={Bar}
                  /* onRef = {ref => this.chart = ref} */
                />
              </div>
            </div>
            <div className="w-[40%] rounded-lg">
              <div className="bg-white rounded-lg pb-5">
                <CanvasJSChart
                  options={Pie}
                  /* onRef = {ref => this.chart = ref} */
                />
                <div className="flex flex-col items-center gap-2 mt-3">
                  <p className="font-medium text-base">
                    Total Pendaftaran Inkubasi
                  </p>
                  <h1 className="font-medium text-2xl">{sumWithInitial}</h1>
                </div>
              </div>
              <div className="bg-white rounded-lg mt-8 py-8 px-5 text-base">
                <Event />
              </div>
            </div>
          </div>
          {/* </div> */}
        </Wrapper>
      </div>
    </>
  );
};

export default Index;
