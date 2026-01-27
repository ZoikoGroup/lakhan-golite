
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { BlogPost } from '../../types/blog';
import './BlogCard.css';

interface BlogCardProps {
  data: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${data.slug}`);
  };
  
  return (
    <div 
      className="card h-100 border-0 shadow-sm blog-card-hover"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-img-container">
        <img src={data.imageUrl} className="card-img-top" alt={data.title} />
      </div>
      <div className="card-body">
        <p className="category-text mb-1">{data.category} • {data.date}</p>
        <h6 className="card-title fw-bold">{data.title}</h6>
      </div>
    </div>
  );
};

export default BlogCard;