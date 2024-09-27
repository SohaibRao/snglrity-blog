import React from "react";
import './BlogCard.css'; // Create and import your CSS file

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-details">
        <div className="blog-category">{blog.category}</div>
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-description">{blog.description}</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
