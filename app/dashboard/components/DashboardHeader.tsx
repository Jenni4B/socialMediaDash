import { TrendingUp } from 'lucide-react';

const DashboardHeader = () => (
  <div className="flex items-center gap-3 mb-8">
    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
      <TrendingUp className="w-5 h-5" />
    </div>
    <h1 className="text-2xl font-bold">Your Dashboard</h1>
  </div>
);

export default DashboardHeader;