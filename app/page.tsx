import React from "react";
import WelcomePage from "./welcomePage/page";
import NaviBar from "../components/common/naviBar";
// import DashboardPage from "./dashboard/page";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <NaviBar />
      <WelcomePage />
    </div>
  );
};

export default Home;