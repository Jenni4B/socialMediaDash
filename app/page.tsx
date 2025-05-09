import React from "react";
import WelcomePage from "../pages/welcomePage";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <WelcomePage />
    </div>
  );
};

export default Home;