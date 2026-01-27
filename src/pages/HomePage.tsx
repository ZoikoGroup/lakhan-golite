import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DUMMY_BLOGS, type BlogPost } from '../types/blog'; 
import BlogCard from '../components/BlogCard/BlogCard';
import { fetchAllBlogs } from '../Services/BlogSevices';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all blogs on component mount
  useEffect(() => {
    const loadBlogs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchAllBlogs();
        console.log("Fetched blogs:", data);
        
        // If API returns data, use it; otherwise use dummy blogs
        if (data && Array.isArray(data) && data.length > 0) {
          console.log("Using API blogs:", data.length);
          setBlogs(data);
        } else {
          console.log("No data from API, using dummy blogs:", DUMMY_BLOGS.length);
          setBlogs(DUMMY_BLOGS);
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        // Fallback to dummy blogs on any error
        console.log("Error occurred, using dummy blogs");
        setBlogs(DUMMY_BLOGS);
        setError("Failed to load from API. Showing cached content.");
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  // Filter blogs based on search query
  const filteredBlogs = (blogs || []).filter(blog => {
    if (!blog || !blog.title || !blog.category) return false;
    return (
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      {/* HERO SECTION WITH INTEGRATED SEARCH BAR */}
      <section className="hero-bg d-flex flex-column align-items-center justify-content-center mb-5">
        <h1 className="display-2 fw-bold text-white">Blogs</h1>
        
        {/* SEARCH BAR - Integrated into Hero */}
        <div className="search-overlap-container mt-4">
          <div className="search-article-wrapper shadow-sm bg-white rounded-pill d-flex align-items-center px-4 py-2">
            <input 
              type="text" 
              placeholder="Search article" 
              className="form-control border-0 no-focus"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isLoading}
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </section>

      {/* ERROR MESSAGE */}
      {error && (
        <Container className="mb-4">
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {error}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </Container>
      )}

      {/* LOADING STATE */}
      {isLoading && (
        <Container className="blog-grid-section">
          <Row className="blog-row-margin g-4">
            <Col xs={12} className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading blogs...</p>
            </Col>
          </Row>
        </Container>
      )}

      {/* BLOG GRID SECTION */}
      {!isLoading && (
        <Container className="blog-grid-section">
          <Row className="blog-row-margin g-4">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog: BlogPost) => (
                <Col key={blog.id} xs={12} md={6} lg={3}>
                  <BlogCard data={blog} />
                </Col>
              ))
            ) : (
              <Col xs={12} className="text-center py-5">
                <h4 className="text-muted">No blogs found matching "{searchQuery}"</h4>
                <p className="text-muted">Try a different search term or browse all blogs.</p>
              </Col>
            )}
          </Row>
        </Container>
      )}

      {/* SUB BANNER SECTION */}
      <div className="subbanner-wrapper container">
        <section className="subbanner row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="subbanner-left col-12 col-md-6">
            <h2>Get our best content in your inbox</h2>
            <p>
              All the tips, stories, and resources you could ever need or want
              straight to your email.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="subbanner-right col-12 col-md-6">
            {/* FORM ROW */}
            <div className="form-row">
              <input
                type="email"
                className="sub-input"
                placeholder="Email address"
              />
              <button className="sub-btn">Subscribe</button>
            </div>
            {/* PRIVACY TEXT */}
            <p className="privacy-text">
              Your privacy matters! Smaile only uses this info to send content
              and updates. You may unsubscribe anytime. View our privacy policy
              for more.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
