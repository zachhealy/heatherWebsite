// BlogPage.tsx
import React, { useState } from "react";
import BlogPost from "./BlogPost";
import "./styles/BlogPage.css";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  shorthand: string;
  thumbnail?: string;
}

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Happy Birthday Heather",
      shorthand: "Click inside to read!",
      thumbnail: "../../heather.jpg",
      content:
        "Happy Birthday darling! I've had this idea for a while, to make you a website full of everything that is amazing about you! I've been working on learning my web design for a while now, and while I'm still learning everyday I want this to be a project that I can work on continously for you. Anytime you make a new achivement, we can celebrate it together and add it to the page. And we can make blog posts together for everyone to see, like this one here!",
    },
    {
      id: "2",
      title: "Example Blog",
      shorthand: "Click here!",
      content: "Content for Blog Post 2.",
    },
    // Add more blog posts as needed
  ];

  const handleThumbnailClick = (postId: string) => {
    setSelectedPost(postId);
  };

  return (
    <div>
      <h2 className="title">HPH Blogs</h2>
      <div className="blog-cards">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="card"
            onClick={() => handleThumbnailClick(post.id)}
          >
            <div className="card-body">
              <img
                src={post.thumbnail}
                alt=""
                className="thumbnail-image"
              ></img>
              <h3 className="card-title">{post.title}</h3>
              <p className="card-text">{post.shorthand}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="full-page-view">
          <BlogPost
            title={
              blogPosts.find((post) => post.id === selectedPost)?.title || ""
            }
            content={
              blogPosts.find((post) => post.id === selectedPost)?.content || ""
            }
            thumb={
              blogPosts.find((post) => post.thumbnail === selectedPost)
                ?.thumbnail || ""
            }
          />
          <button onClick={() => setSelectedPost(null)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
