import ButtonAppBar from "../ButtonAppBar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../index.css";
const Dashboard = () => {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <br></br>
      <div className="Sidebar">
        <Sidebar>
          <Menu>
            <MenuItem routerLink={<Link to="/"></Link>}> Dashboard </MenuItem>
            <SubMenu label="Scanning">
              <MenuItem routerLink={<Link to="/scan"></Link>}> 옵션1</MenuItem>
              <MenuItem> 옵션2 </MenuItem>
            </SubMenu>

            <MenuItem routerLink={<Link to="/monitor"></Link>}>
              Monitoring
            </MenuItem>
          </Menu>
        </Sidebar>
        <h1>대쉬보드 페이지 입니다.</h1>
      </div>
    </div>
  );
};

export default Dashboard;
