import type { BlogPost } from '../types/blog';

const API_BASE_URL = "/api/blog/posts";

/**
 * Transform API response to match BlogPost interface
 */
const transformApiBlog = (apiBlog: any): BlogPost => {
  // Extract year from created_at date
  const date = apiBlog.created_at ? new Date(apiBlog.created_at).getFullYear().toString() : "2026";
  
  // Create excerpt by stripping HTML and taking first 150 chars
  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '').substring(0, 150).trim() + '...';
  const excerpt = apiBlog.content ? stripHtml(apiBlog.content) : "No content available";
  
  return {
    id: apiBlog.id,
    title: apiBlog.title || "Untitled",
    category: apiBlog.category || "Blog", // Default category if not provided by API
    date: date,
    imageUrl: apiBlog.featured_image || "https://via.placeholder.com/500x300?text=Blog+Image",
    slug: apiBlog.slug,
    excerpt: excerpt,
    content: apiBlog.content || "",
  };
};

/**
 * Fetch all blog posts from the API
 */
export const fetchAllBlogs = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(API_BASE_URL);
    // const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      console.warn(`API returned ${response.status}, returning empty array`);
      return [];
    }
    const data = await response.json();
    // Ensure we always return an array
    const apiBlogs = Array.isArray(data) ? data : (data.posts || data.data || []);
    
    // Transform API response to match BlogPost interface
    const transformedBlogs = apiBlogs.map(transformApiBlog);
    console.log("Transformed blogs:", transformedBlogs);
    return transformedBlogs;
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    return [];
  }
};

/**
 * Fetch a single blog post by slug
 */
export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${slug}`);
    // const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      console.warn(`API returned ${response.status}`);
      return null;
    }
    const data = await response.json();
    // Handle both direct object and wrapped response
    const apiBlog = Array.isArray(data) ? data[0] : data;
    return apiBlog ? transformApiBlog(apiBlog) : null;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    throw error;
  }
};

/**
 * Search blogs by title or category
 */
export const searchBlogs = async (query: string): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      console.warn(`Search API returned ${response.status}, returning empty array`);
      return [];
    }
    const data = await response.json();
    // Ensure we always return an array
    const blogs = Array.isArray(data) ? data : (data.posts || data.data || []);
    return Array.isArray(blogs) ? blogs : [];
  } catch (error) {
    console.error("Error searching blogs:", error);
    return [];
  }
};
