import React from "react";
import ButtonAppBar from "../ButtonAppBar";
import "../index.css";
import Sidenav from "../Sidenav";
function Scanning() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className="Sidebar">
        <Sidenav></Sidenav>
        <h1>스케닝 페이지 입니다.</h1>
      </div>
    </div>
  );
}

export default Scanning;
