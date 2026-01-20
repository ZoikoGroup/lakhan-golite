import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DUMMY_BLOGS, type BlogPost } from '../../types/blog'; 
import BlogCard from '../../components/BlogCard/BlogCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import './BlogGrid.css';

const BlogGrid: React.FC = () => {
  return (
    <Container className="blog-grid-section">
      {/* 1. Search Bar Section */}
      <div className="search-overlap-container">
        <SearchBar />
      </div>

      {/* 2. Blog List Section */}
      <Row className="blog-row-margin g-4">
        {/* We map over DUMMY_BLOGS to generate a column and card for each item */}
        {DUMMY_BLOGS.map((blog: BlogPost) => (
          <Col key={blog.id} xs={12} md={6} lg={3}>
            <BlogCard data={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogGrid;