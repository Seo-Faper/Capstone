import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Scanning from "./pages/Scanning";
import Monitoring from "./pages/Monitoring";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import ButtonAppBar from "./ButtonAppBar";

export default function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <br></br>
      <Sidebar>
        <Menu>
          <MenuItem> Dashboard </MenuItem>
          <SubMenu label="Scanning">
            <MenuItem> Start-Scanning </MenuItem>
            <MenuItem> Recent Report </MenuItem>
          </SubMenu>

          <MenuItem> Monitoring </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
