import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashbord from "./pages/Dashbord";
import Scanning from "./pages/Scanning";
import Monitoring from "./pages/Monitoring";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" exact component={Dashbord} />
          <Route path="/scan" component={Scanning} />
          <Route path="/monitor" component={Monitoring} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
