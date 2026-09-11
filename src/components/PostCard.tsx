import { type PostData } from "../types/postData";

type PostCardProps = {
  post: PostData;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-4 space-y-3">
      {/* Post Image */}
      <img
        src={post.imageURL}
        alt={post.caption}
        className="w-full h-72 object-cover rounded-xl"
      />

      {/* Caption */}
      <p className="text-gray-800 font-medium">{post.caption}</p>

      {/* Date */}
      <p className="text-xs text-gray-400">
        {new Date(post.createAt).toLocaleString()}
      </p>
    </div>
  );
};

export default PostCard;