import React from "react";
import WelcomePage from "./welcomePage";
import NaviBar from "../components/common/naviBar";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <NaviBar />
      <WelcomePage />
    </div>
  );
};

export default Home;