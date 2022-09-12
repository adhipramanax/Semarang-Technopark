import React from "react";
import partners1 from "../../assets/images/partners1.png";
import partners2 from "../../assets/images/partners2.png";
import partners3 from "../../assets/images/partners3.png";
import partners4 from "../../assets/images/partners4.png";
import partners5 from "../../assets/images/partners5.png";
import partners6 from "../../assets/images/partners6.png";

const index = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center gap-14 py-24">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold">Partner Kami</h1>
          <p className="text-sm font-normal">
            Semarang Technopark memiliki beberapa pertner dalam membantu mensukseskan visi dan misi
            dari program dan pengelolaan inkubasi kami.
          </p>
        </div>
        <div className="flex">
          <img src={partners1} alt="partners" />
          <img src={partners2} alt="partners" />
          <img src={partners3} alt="partners" />
          <img src={partners4} alt="partners" />
          <img src={partners5} alt="partners" />
          <img src={partners6} alt="partners" />
        </div>
      </div>
    </>
  );
};

export default index;
