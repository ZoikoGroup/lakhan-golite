import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { BlogPost } from '../types/blog';
import { DUMMY_BLOGS } from '../types/blog';
import { fetchBlogBySlug } from '../Services/BlogSevices';
import Navigation from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './BlogDetailPage.css';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog data on mount or when slug changes
  useEffect(() => {
    const loadBlog = async () => {
      if (!slug) return;

      setIsLoading(true);
      setError(null);

      try {
        // Try to fetch from API first
        const apiBlog = await fetchBlogBySlug(slug);
        if (apiBlog) {
          setBlog(apiBlog);
        } else {
          // Fallback to dummy blogs if API returns null
          const dummyBlog = DUMMY_BLOGS.find(b => b.slug === slug);
          if (dummyBlog) {
            setBlog(dummyBlog);
          } else {
            setError("Blog post not found");
            setBlog(null);
          }
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        // Fallback to dummy blogs on API error
        const dummyBlog = DUMMY_BLOGS.find(b => b.slug === slug);
        if (dummyBlog) {
          setBlog(dummyBlog);
          setError("Using cached version of this blog.");
        } else {
          setError("Failed to load blog. Blog not found in cache either.");
          setBlog(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  // Loading state
  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="blog-detail-container">
          <div className="container text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error/Not found state
  if (!blog || error === "Blog post not found") {
    return (
      <>     
        <Navigation />
        <div className="blog-detail-container">
          <div className="container">
            <h2>Blog not found</h2>
            <p className="text-muted">Sorry, we couldn't find the blog post you're looking for.</p>
            <button onClick={() => navigate('/')} className="btn btn-primary">
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="blog-detail-container">
        <div className="container">
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-outline-secondary mb-4"
          >
            ← Back to Blogs
          </button>

          {error && (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              {error}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )}

          <article className="blog-detail">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="blog-detail-image"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Blog+Image';
              }}
            />

            <div className="blog-detail-header mt-4">
              <span className="badge bg-primary me-2">{blog.category}</span>
              <span className="blog-date">{blog.date}</span>
            </div>

            <h1 className="blog-detail-title mt-3">{blog.title}</h1>

            <div className="blog-detail-content mt-4">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          <hr className="my-5" />

          <div className="back-to-blogs">
            <button 
              onClick={() => navigate('/')} 
              className="btn btn-primary"
            >
              ← Back to All Blogs
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
