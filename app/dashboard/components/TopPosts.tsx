import { Eye, Heart, MessageCircle, Share2 } from 'lucide-react';

interface TopPostsProps {
  posts: any[];
}

const TopPosts = ({ posts }: TopPostsProps) => (
  <div className="bg-gray-800 rounded-2xl p-6">
    <h3 className="text-xl font-bold mb-6">Top Posts On Social Media</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">{post.image}</div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm line-clamp-2">{post.title}</h4>
              <p className="text-xs text-gray-400">{post.platform}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <span>{post.likes}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-3 h-3" />
                <span>{post.shares}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopPosts;