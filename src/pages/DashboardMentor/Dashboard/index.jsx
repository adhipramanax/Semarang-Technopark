import React, { useState } from "react";

import Sidebar from "../../../components/Sidebar";
import NavbarDashboard from "../../../components/Navbar/NavbarDashboard";
import CanvasJSReact from "../../../assets/js/canvasjs.react";
import { useEffect } from "react";
// import Event from "./Event";
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
      <div className="flex bg-[#f9f9f9] h-screen">
        <Sidebar />
        <Wrapper>
          {/* <div className="w-full ml-64"> */}
          <NavbarDashboard judul="" />
          <div className="flex flex-col gap-5 mx-6 mt-20 rounded-lg">
            <h1 className="text-2xl font-semibold">Dashboard</h1>

            <div className="w-[60%] rounded-lg">
              <div className="flex gap-4 flex-nowrap snap-x overflow-x-scroll snap-mandatory scroll-pl-12 no-scrollbar">
                <div
                  className={`bg-white flex flex-col rounded-lg justify-center items-center border-b-[10px] border-b-[#015AA8] px-2 gap-2 text-center py-8 snap-center snap-always`}
                >
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4167 25.4V25.312L24.4065 25.2247C24.3363 24.6281 24.0844 24.0646 23.6493 23.596L23.6304 23.5756L23.6107 23.556L20.2774 20.2227C19.2083 19.1535 17.4585 19.1535 16.3894 20.2227C15.8433 20.7688 15.5834 21.4736 15.5834 22.1666C15.5834 22.3614 15.6039 22.5571 15.6456 22.75H11.6667C10.155 22.75 8.91675 23.9882 8.91675 25.5C8.91675 27.0117 10.155 28.25 11.6667 28.25H15.6494C15.4598 29.1336 15.7064 30.0943 16.3894 30.7773C16.9355 31.3234 17.6404 31.5833 18.3334 31.5833C19.0264 31.5833 19.7313 31.3234 20.2774 30.7773L23.6107 27.444L23.6441 27.4106L23.6774 27.3773L23.7255 27.3292L23.7691 27.2769C24.0946 26.8863 24.325 26.4158 24.4017 25.8788L24.4167 25.7733V25.6666V25.6662V25.6657V25.6652V25.6647V25.6642V25.6637V25.6632V25.6627V25.6622V25.6617V25.6613V25.6608V25.6603V25.6598V25.6593V25.6588V25.6583V25.6578V25.6573V25.6568V25.6563V25.6558V25.6553V25.6548V25.6543V25.6538V25.6533V25.6528V25.6523V25.6518V25.6513V25.6508V25.6503V25.6498V25.6493V25.6488V25.6483V25.6478V25.6473V25.6468V25.6463V25.6458V25.6453V25.6448V25.6443V25.6438V25.6433V25.6428V25.6423V25.6418V25.6413V25.6408V25.6403V25.6398V25.6393V25.6388V25.6382V25.6377V25.6372V25.6367V25.6362V25.6357V25.6352V25.6347V25.6342V25.6337V25.6332V25.6326V25.6321V25.6316V25.6311V25.6306V25.6301V25.6296V25.6291V25.6285V25.628V25.6275V25.627V25.6265V25.626V25.6255V25.6249V25.6244V25.6239V25.6234V25.6229V25.6224V25.6219V25.6213V25.6208V25.6203V25.6198V25.6193V25.6188V25.6182V25.6177V25.6172V25.6167V25.6162V25.6156V25.6151V25.6146V25.6141V25.6136V25.613V25.6125V25.612V25.6115V25.611V25.6104V25.6099V25.6094V25.6089V25.6084V25.6078V25.6073V25.6068V25.6063V25.6057V25.6052V25.6047V25.6042V25.6036V25.6031V25.6026V25.6021V25.6015V25.601V25.6005V25.6V25.5994V25.5989V25.5984V25.5979V25.5973V25.5968V25.5963V25.5958V25.5952V25.5947V25.5942V25.5936V25.5931V25.5926V25.5921V25.5915V25.591V25.5905V25.59V25.5894V25.5889V25.5884V25.5878V25.5873V25.5868V25.5862V25.5857V25.5852V25.5847V25.5841V25.5836V25.5831V25.5825V25.582V25.5815V25.5809V25.5804V25.5799V25.5793V25.5788V25.5783V25.5778V25.5772V25.5767V25.5762V25.5756V25.5751V25.5746V25.574V25.5735V25.573V25.5724V25.5719V25.5714V25.5708V25.5703V25.5698V25.5692V25.5687V25.5682V25.5676V25.5671V25.5666V25.566V25.5655V25.565V25.5644V25.5639V25.5633V25.5628V25.5623V25.5617V25.5612V25.5607V25.5601V25.5596V25.5591V25.5585V25.558V25.5575V25.5569V25.5564V25.5559V25.5553V25.5548V25.5542V25.5537V25.5532V25.5526V25.5521V25.5516V25.551V25.5505V25.55V25.5494V25.5489V25.5483V25.5478V25.5473V25.5467V25.5462V25.5457V25.5451V25.5446V25.5441V25.5435V25.543V25.5424V25.5419V25.5414V25.5408V25.5403V25.5398V25.5392V25.5387V25.5381V25.5376V25.5371V25.5365V25.536V25.5355V25.5349V25.5344V25.5339V25.5333V25.5328V25.5322V25.5317V25.5312V25.5306V25.5301V25.5296V25.529V25.5285V25.5279V25.5274V25.5269V25.5263V25.5258V25.5253V25.5247V25.5242V25.5236V25.5231V25.5226V25.522V25.5215V25.521V25.5204V25.5199V25.5194V25.5188V25.5183V25.5177V25.5172V25.5167V25.5161V25.5156V25.5151V25.5145V25.514V25.5135V25.5129V25.5124V25.5118V25.5113V25.5108V25.5102V25.5097V25.5092V25.5086V25.5081V25.5076V25.507V25.5065V25.506V25.5054V25.5049V25.5043V25.5038V25.5033V25.5027V25.5022V25.5017V25.5011V25.5006V25.5001V25.4995V25.499V25.4985V25.4979V25.4974V25.4969V25.4963V25.4958V25.4953V25.4947V25.4942V25.4937V25.4931V25.4926V25.4921V25.4915V25.491V25.4905V25.4899V25.4894V25.4889V25.4883V25.4878V25.4873V25.4867V25.4862V25.4857V25.4852V25.4846V25.4841V25.4836V25.483V25.4825V25.482V25.4814V25.4809V25.4804V25.4799V25.4793V25.4788V25.4783V25.4777V25.4772V25.4767V25.4761V25.4756V25.4751V25.4746V25.474V25.4735V25.473V25.4725V25.4719V25.4714V25.4709V25.4703V25.4698V25.4693V25.4688V25.4682V25.4677V25.4672V25.4667V25.4661V25.4656V25.4651V25.4646V25.464V25.4635V25.463V25.4625V25.4619V25.4614V25.4609V25.4604V25.4598V25.4593V25.4588V25.4583V25.4578V25.4572V25.4567V25.4562V25.4557V25.4551V25.4546V25.4541V25.4536V25.4531V25.4525V25.452V25.4515V25.451V25.4505V25.4499V25.4494V25.4489V25.4484V25.4479V25.4474V25.4468V25.4463V25.4458V25.4453V25.4448V25.4443V25.4437V25.4432V25.4427V25.4422V25.4417V25.4412V25.4407V25.4401V25.4396V25.4391V25.4386V25.4381V25.4376V25.4371V25.4365V25.436V25.4355V25.435V25.4345V25.434V25.4335V25.433V25.4325V25.4319V25.4314V25.4309V25.4304V25.4299V25.4294V25.4289V25.4284V25.4279V25.4274V25.4269V25.4264V25.4259V25.4253V25.4248V25.4243V25.4238V25.4233V25.4228V25.4223V25.4218V25.4213V25.4208V25.4203V25.4198V25.4193V25.4188V25.4183V25.4178V25.4173V25.4168V25.4163V25.4158V25.4153V25.4148V25.4143V25.4138V25.4133V25.4128V25.4123V25.4118V25.4113V25.4108V25.4103V25.4098V25.4093V25.4088V25.4083V25.4078V25.4073V25.4069V25.4064V25.4059V25.4054V25.4049V25.4044V25.4039V25.4034V25.4029V25.4024V25.4019V25.4014V25.401V25.4005V25.4ZM29.3501 18.9833H34.1667C34.2079 18.9833 34.2484 18.9988 34.2832 19.0336C34.3179 19.0683 34.3334 19.1088 34.3334 19.15V27.8833C34.3334 30.4903 33.4351 32.3994 32.0898 33.6629C30.7298 34.9402 28.7954 35.6666 26.5501 35.6666H13.4501C11.2048 35.6666 9.27037 34.9402 7.91032 33.6629C6.56511 32.3994 5.66675 30.4903 5.66675 27.8833V13.1166C5.66675 10.5096 6.56511 8.60053 7.91032 7.3371C9.27037 6.05974 11.2048 5.33331 13.4501 5.33331H20.5167C20.5579 5.33331 20.5984 5.3488 20.6332 5.38356C20.6679 5.41831 20.6834 5.45881 20.6834 5.49998V10.3166C20.6834 15.0951 24.5717 18.9833 29.3501 18.9833Z"
                      fill="#015AA8"
                      stroke="#015AA8"
                      stroke-width="3"
                    />
                    <path
                      d="M29.0657 13.6834L29.0578 13.6833H29.0499C27.3218 13.6833 25.9666 12.299 25.9666 10.7333V5.93911C27.5843 7.56167 29.7179 9.71472 31.6179 11.632C32.3502 12.371 33.0477 13.0749 33.6677 13.6999C32.0573 13.6995 30.3545 13.697 29.0657 13.6834Z"
                      fill="#015AA8"
                      stroke="#015AA8"
                      stroke-width="3"
                    />
                  </svg>

                  <p className="text-lg w-[160px]">Proposal masuk</p>
                  <h1 className="font-bold text-4xl">30</h1>
                </div>
                <div
                  className={`bg-white flex flex-col rounded-lg justify-center items-center border-b-[10px] border-b-[#E0AF00] px-2 gap-2 text-center py-8 snap-center snap-always`}
                >
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.48334 11.549L8.4844 11.5484L18.3641 5.83387C19.538 5.16453 20.9674 5.16892 22.1166 5.8323C22.1167 5.83232 22.1167 5.83235 22.1167 5.83237L32.0113 11.5459C33.1716 12.2298 33.886 13.4578 33.9 14.8071V26.2C33.9 27.5505 33.1833 28.7871 32.0334 29.4509L32.0333 29.451L22.1392 35.1643C22.1383 35.1648 22.1375 35.1653 22.1366 35.1657C20.9626 35.8354 19.5328 35.8312 18.3835 35.1677C18.3834 35.1676 18.3834 35.1676 18.3833 35.1676L8.48882 29.4541C7.32828 28.77 6.6167 27.5274 6.6167 26.2V14.8C6.6167 13.4495 7.33344 12.2129 8.48334 11.549ZM13.1558 24.8123L13.1548 24.8136C11.7479 26.9084 13.2109 29.7666 15.7834 29.7666H24.7167C27.2546 29.7666 28.766 26.9033 27.3419 24.8086C26.2481 23.1863 24.4469 22.0372 22.3702 21.5681C24.2911 20.7468 25.6334 18.8418 25.6334 16.6166C25.6334 13.6382 23.2285 11.2333 20.25 11.2333C17.2674 11.2333 14.8667 13.6591 14.8667 16.6166C14.8667 18.8418 16.209 20.7468 18.1298 21.5681C16.0517 22.0375 14.2493 23.188 13.1558 24.8123Z"
                      fill="#E0AF00"
                      stroke="#E0AF00"
                      stroke-width="3"
                    />
                  </svg>

                  <p className="text-lg w-[160px]">Proposal direview</p>
                  <h1 className="font-bold text-4xl">27</h1>
                </div>
                <div
                  className={`bg-white flex flex-col rounded-lg justify-center items-center border-b-[10px] border-b-[#56A10E] px-2 gap-2 text-center py-8 snap-center snap-always`}
                >
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.807 8.7543L30.808 8.75468C31.4224 8.98442 32.0666 9.5045 32.5679 10.2228C33.0663 10.9369 33.3364 11.7225 33.35 12.38V24.7497C33.35 25.4351 33.1128 26.34 32.6621 27.2361C32.2116 28.1316 31.6244 28.8662 31.0687 29.2815L23.9027 34.631L23.8987 34.634C23.0294 35.2875 21.8082 35.658 20.5167 35.658C19.2251 35.658 18.0039 35.2875 17.1347 34.634L17.1307 34.631L9.96466 29.2815C9.40897 28.8662 8.82176 28.1316 8.37129 27.2361C7.92056 26.34 7.68335 25.4351 7.68335 24.7497V12.3664C7.68335 11.7166 7.94313 10.9341 8.43894 10.219C8.93457 9.50416 9.57749 8.98447 10.192 8.75468L10.1931 8.7543L18.5082 5.63821C18.5084 5.63814 18.5086 5.63806 18.5088 5.63799C18.9815 5.46155 19.703 5.34552 20.5 5.34552C21.297 5.34552 22.0185 5.46154 22.4912 5.63796C22.4914 5.63804 22.4916 5.63813 22.4919 5.63821L30.807 8.7543ZM22.2001 20.5049C24.1032 19.7823 25.45 17.9513 25.45 15.783C25.45 12.9879 23.1784 10.7164 20.3834 10.7164C17.6049 10.7164 15.3297 12.9894 15.35 15.7894C15.3527 17.9876 16.7247 19.826 18.6929 20.5289C17.7426 20.7206 16.8217 21.0702 16.0227 21.5984L16.018 21.6016C14.7459 22.4497 13.8667 23.7769 13.8667 25.3164V25.3295L13.8669 25.3427C13.8938 26.8739 14.7382 28.1586 16.0108 29.0096C17.3163 29.8991 18.9619 30.283 20.5 30.283C22.062 30.283 23.675 29.8716 24.9726 29.0207L24.9726 29.0208L24.9821 29.0144C26.2574 28.1642 27.1227 26.8448 27.1498 25.3265L27.15 25.3131V25.2997C27.15 23.73 26.2571 22.4405 24.9987 21.6016L24.994 21.5984C24.1604 21.0473 23.1941 20.6906 22.2001 20.5049Z"
                      fill="#56A10E"
                      stroke="#56A10E"
                      stroke-width="3"
                    />
                  </svg>

                  <p className="text-lg w-[160px]">Proposal dinilai</p>
                  <h1 className="font-bold text-4xl">55</h1>
                </div>
                <div
                  className={`bg-white flex flex-col rounded-lg justify-center items-center border-b-[10px] border-b-[#D73737] px-2 gap-2 text-center py-8 snap-center snap-always`}
                >
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.3745 35.6666H7.12573C7.55183 30.1288 13.2446 25.3333 20.7501 25.3333C28.2556 25.3333 33.9484 30.1288 34.3745 35.6666Z"
                      fill="#D73737"
                      stroke="#D73737"
                      stroke-width="3"
                    />
                    <path
                      d="M27.3765 10.5235L27.3764 10.5235L27.3782 10.5305C27.9381 12.77 27.3377 15.241 25.5727 17.006L25.5727 17.006L25.567 17.0118C24.3295 18.2629 22.7604 18.8998 21.1371 18.968L21.1087 18.9692L21.0805 18.9715C20.4428 19.0225 19.7775 18.9476 19.1211 18.78L19.1037 18.7755L19.0861 18.7715C17.9097 18.501 16.8124 17.9067 15.9135 17.0088C14.6066 15.6867 13.9302 13.9787 13.9167 12.288H13.9167L13.9166 12.2773C13.8892 10.4707 14.5726 8.68511 15.922 7.34938L15.9223 7.34908C17.3703 5.91488 19.2679 5.2421 21.101 5.36341L21.1131 5.36421L21.1252 5.36481C22.7618 5.44665 24.3527 6.11216 25.5798 7.33443C25.9561 7.72612 26.2954 8.1645 26.5436 8.58249L26.5555 8.60243L26.5679 8.622C26.9434 9.21213 27.2139 9.85974 27.3765 10.5235ZM20.7335 7.81193L20.715 7.79442C19.511 6.65376 17.6106 6.63429 16.404 7.80826L16.3821 7.82956L16.3611 7.85174C15.2205 9.05577 15.201 10.9561 16.375 12.1627L16.3788 12.1666L16.3561 12.1894C15.1598 13.3856 15.1808 15.3187 16.3727 16.5107C17.5585 17.6965 19.5083 17.6965 20.6941 16.5107L20.7334 16.4713L20.8227 16.5607C22.0085 17.7465 23.9583 17.7465 25.1441 16.5607C26.3284 15.3764 26.3298 13.43 25.1485 12.2438L25.0471 12.141L25.0941 12.094C26.2798 10.9082 26.2798 8.95848 25.0941 7.77269L25.0868 7.76543L25.0794 7.75826C23.8886 6.59961 21.9664 6.57902 20.7727 7.77269L21.8334 8.83335L20.7727 7.77269L20.7335 7.81193Z"
                      fill="#1C1B1E"
                      stroke="#D73737"
                      stroke-width="3"
                    />
                  </svg>

                  <p className="text-lg w-[160px]">Proposal ditolak</p>
                  <h1 className="font-bold text-4xl">34</h1>
                </div>
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