import React from "react";
import BlogCard from "./BlogCard"; // Import the BlogCard component

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      category: "Technology",
      title: "The Future of AI",
      description: "A short description of the future of AI...",
      image: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      category: "Health",
      title: "Benefits of a Balanced Diet",
      description: "A short description of maintaining a balanced diet...",
      image: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    // Add more blog data here
  ];

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
