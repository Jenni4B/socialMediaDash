import { Eye, Users } from 'lucide-react';

const KeyMetrics = () => (
  <div className="lg:col-span-2 grid grid-cols-2 gap-4">
    <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center">
      <Eye className="w-8 h-8 text-blue-400 mb-3" />
      <div className="text-center">
        <p className="text-2xl font-bold">YouTube</p>
        <p className="text-gray-400 text-sm">Views</p>
        <p className="text-xl font-semibold mt-2">2.4M</p>
      </div>
    </div>
    <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center">
      <Users className="w-8 h-8 text-green-400 mb-3" />
      <div className="text-center">
        <p className="text-2xl font-bold">New</p>
        <p className="text-gray-400 text-sm">Followers</p>
        <p className="text-xl font-semibold mt-2">+1.2K</p>
      </div>
    </div>
  </div>
);

export default KeyMetrics;