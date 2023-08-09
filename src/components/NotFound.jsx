import React from "react";
import Header from "./Header";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="err">Page Not Found!!</div>
    </>
  );
};

export default NotFound;
