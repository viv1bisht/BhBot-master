import React from "react";
import { Header, Body, Footer } from "./index";
const Main = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="left-frame">{/* Left Frame Content Goes Here */}</div>
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default Main;
