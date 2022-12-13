import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./index.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const Sidenav = () => {
  const label=(<Typography component="div" variant="h6">Scanning</Typography>);
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to="/"></Link>}> <Typography component="div" variant="h6">Dashboard</Typography></MenuItem>
          <SubMenu label={label}>
            <MenuItem routerLink={<Link to="/scan1"></Link>}>
            <Typography component="div" variant="h6">Start Scanning</Typography>
            </MenuItem>
            <MenuItem routerLink={<Link to="/scan2"></Link>}>  <Typography component="div" variant="h6">Recent Report</Typography> </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};
export default Sidenav;
