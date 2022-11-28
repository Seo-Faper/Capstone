import React from "react";
import ButtonAppBar from "../ButtonAppBar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../index.css";

function Monitoring() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <br></br>
      <div className="Sidebar">
        <Sidebar>
          <Menu>
            <MenuItem routerLink={<Link to="/"></Link>}> Dashboard </MenuItem>
            <SubMenu label="Scanning">
              <MenuItem routerLink={<Link to="/scan"></Link>}>
                Start Scanning
              </MenuItem>
              <MenuItem> Recent Report </MenuItem>
            </SubMenu>

            <MenuItem routerLink={<Link to="/monitor"></Link>}>
              Monitoring
            </MenuItem>
          </Menu>
        </Sidebar>
        <h1>모니터 페이지 입니다.</h1>
      </div>
    </div>
  );
}

export default Monitoring;
