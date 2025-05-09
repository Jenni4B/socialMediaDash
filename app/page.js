import WelcomePage from "@/pages/welcomePage";
import NaviBar from "@/components/common/naviBar";
import DashboardPage from "@/pages/dashboard";
import settingsPage from "@/pages/settings";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <NaviBar />
      <WelcomePage />
    </div>

    
  );
}

