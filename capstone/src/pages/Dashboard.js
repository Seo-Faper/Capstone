import ButtonAppBar from "../ButtonAppBar";
import "../index.css";
import Sidenav from "../Sidenav";
const Dashboard = () => {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className="Sidebar">
        <Sidenav></Sidenav>
        <h1>대쉬보드 페이지 입니다.</h1>
      </div>
    </div>
  );
};

export default Dashboard;
