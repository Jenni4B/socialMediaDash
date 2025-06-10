'use client';

// Libraries
import React, { useState } from 'react';

// Components
import NaviBar from '../../components/common/naviBar';
import DashboardHeader from './components/DashboardHeader';
import DashboardFilters from './components/DashboardFilters';
import AnalyticsChart from './components/AnalyticsChart';
import KeyMetrics from './components/KeyMetrics';
import TopPosts from './components/TopPosts';

// Import dummy data
import { analyticsData } from '../dummyData/analytics';
import { topPosts } from '../dummyData/topPosts';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState('Last 3 Months');
  const [services, setServices] = useState('All');
  const [posts, setPosts] = useState('All');
  const [isTimeFrameOpen, setIsTimeFrameOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPostsOpen, setIsPostsOpen] = useState(false);

  const timeFrameOptions = ['Last 3 Months', 'Last 6 Months', 'Last Year', 'All Time'];
  const servicesOptions = ['All', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'DeviantArt'];
  const postsOptions = ['All', 'Most Recent', 'Most Popular', 'Most Engaged'];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <NaviBar />
        <DashboardHeader />
        <DashboardFilters
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
          isTimeFrameOpen={isTimeFrameOpen}
          setIsTimeFrameOpen={setIsTimeFrameOpen}
          timeFrameOptions={timeFrameOptions}
          services={services}
          setServices={setServices}
          isServicesOpen={isServicesOpen}
          setIsServicesOpen={setIsServicesOpen}
          servicesOptions={servicesOptions}
          posts={posts}
          setPosts={setPosts}
          isPostsOpen={isPostsOpen}
          setIsPostsOpen={setIsPostsOpen}
          postsOptions={postsOptions}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <AnalyticsChart data={analyticsData} />
          <KeyMetrics />
        </div>
        <TopPosts posts={topPosts} />
      </div>
    </div>
  );
};

export default Dashboard;