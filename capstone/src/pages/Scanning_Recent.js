import React from "react";
import ButtonAppBar from "../ButtonAppBar";
import "../index.css";
import Sidenav from "../Sidenav";
function Scanning_Recent() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className="Sidebar">
        <Sidenav></Sidenav>
        <h1>Recent Report 페이지 입니다.</h1>
      </div>
    </div>
  );
}

export default Scanning_Recent;
