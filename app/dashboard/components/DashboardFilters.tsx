import { ChevronDown } from 'lucide-react';

interface DashboardFiltersProps {
  timeFrame: string;
  setTimeFrame: (v: string) => void;
  isTimeFrameOpen: boolean;
  setIsTimeFrameOpen: (v: boolean) => void;
  timeFrameOptions: string[];

  services: string;
  setServices: (v: string) => void;
  isServicesOpen: boolean;
  setIsServicesOpen: (v: boolean) => void;
  servicesOptions: string[];

  posts: string;
  setPosts: (v: string) => void;
  isPostsOpen: boolean;
  setIsPostsOpen: (v: boolean) => void;
  postsOptions: string[];
}

const DashboardFilters = ({
  timeFrame, setTimeFrame, isTimeFrameOpen, setIsTimeFrameOpen, timeFrameOptions,
  services, setServices, isServicesOpen, setIsServicesOpen, servicesOptions,
  posts, setPosts, isPostsOpen, setIsPostsOpen, postsOptions
}: DashboardFiltersProps) => (
  <div className="bg-gray-800 rounded-xl p-4 mb-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Time Frame */}
      <div className="relative">
        <label className="block text-sm text-gray-400 mb-2">Auto date range</label>
        <div className="relative">
          <button
            onClick={() => setIsTimeFrameOpen(!isTimeFrameOpen)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-left flex items-center justify-between hover:bg-gray-600 transition-colors"
          >
            <span>{timeFrame}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isTimeFrameOpen ? 'rotate-180' : ''}`} />
          </button>
          {isTimeFrameOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 rounded-lg shadow-lg z-10">
              {timeFrameOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setTimeFrame(option);
                    setIsTimeFrameOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Services */}
      <div className="relative">
        <label className="block text-sm text-gray-400 mb-2">Services</label>
        <div className="relative">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-left flex items-center justify-between hover:bg-gray-600 transition-colors"
          >
            <span>{services}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {isServicesOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 rounded-lg shadow-lg z-10">
              {servicesOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setServices(option);
                    setIsServicesOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Posts */}
      <div className="relative">
        <label className="block text-sm text-gray-400 mb-2">Posts</label>
        <div className="relative">
          <button
            onClick={() => setIsPostsOpen(!isPostsOpen)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-left flex items-center justify-between hover:bg-gray-600 transition-colors"
          >
            <span>{posts}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isPostsOpen ? 'rotate-180' : ''}`} />
          </button>
          {isPostsOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 rounded-lg shadow-lg z-10">
              {postsOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setPosts(option);
                    setIsPostsOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardFilters;