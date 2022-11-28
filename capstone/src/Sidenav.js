import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./index.css";
import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <>
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
    </>
  );
};
export default Sidenav;
