import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import Scanning from "./pages/Scanning";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const App = () => {
  return (
    <div>
      <Sidebar>
        <Menu>
          <MenuItem>Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem>E-commerce</MenuItem>
        </Menu>
      </Sidebar>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scan" element={<Scanning />} />
        <Route path="/monitor" element={<Monitoring />} />
      </Routes>
    </div>
  );
};

export default App;
