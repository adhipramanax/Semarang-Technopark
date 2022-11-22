import React, { useContext } from 'react'
import userContext from '../../context/userContext';

const Wrapper = ({ children }) => {
  const { hide } = useContext(userContext);

  function cekHide(hide) {
    if (hide) {
      return "ml-16"
    } else {
      return "ml-64"
    }
  }
  return (
    <div className={`w-full ${cekHide(hide)} duration-500 ease-out`}>{children}</div>
  )
}

export default Wrapper