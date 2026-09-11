import { useState } from "react";
import PostCard from "../components/PostCard";
import { type PostData } from "../types/postData";

const dummyPosts: PostData[] = [
  {
    id: "1",
    caption: "My first photo 🌄",
    imageURL: "https://picsum.photos/400/300",
    createAt: new Date().toISOString(),
  },
  {
    id: "2",
    caption: "Coffee time ☕",
    imageURL: "https://picsum.photos/400/301",
    createAt: new Date().toISOString(),
  },
];

const FeedPage = () => {
  const [posts] = useState<PostData[]>(dummyPosts);

  return (
    <div className="py-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Photo Feed
      </h1>

      {/* Feed Container */}
      <div className="max-w-xl mx-auto space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;