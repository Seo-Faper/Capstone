import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import Scanning from "./pages/Scanning";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scan" element={<Scanning />} />
        <Route path="/monitor" element={<Monitoring />} />
      </Routes>
    </div>
  );
};

export default App;
