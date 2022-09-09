import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <h1>ini Login</h1>
      <Link to={"/register"}>Ke register</Link>
    </div>
  );
};

export default index;
