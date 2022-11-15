import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const Modal = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="p-5 bg-red-500" onClick={() => setShow(true)}>
        Modal
      </button>
      <ModalContainer onClose={() => setShow(false)} show={show} />
    </>
  );
};

export default Modal;
