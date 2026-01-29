import type { BlogPost } from "../types/blog";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = "https://goliteapi.golitemobile.com/api/blog";


if (!API_BASE_URL) {
  console.error("VITE_API_BASE_URL is not defined. Please set it in the environment variables.");
}

/**
 * Transform API response into BlogPost interface
 */
const transformApiBlog = (apiBlog: any): BlogPost => {
  const year =
    apiBlog.created_at
      ? new Date(apiBlog.created_at).getFullYear().toString()
      : "2026";

  const stripHtml = (html: string) =>
    html.replace(/<[^>]*>/g, "").substring(0, 150).trim() + "...";

  return {
    id: apiBlog.id,
    title: apiBlog.title || "Untitled",
    category: apiBlog.category || "Blog",
    date: year,
    imageUrl:
      apiBlog.featured_image ||
      "https://via.placeholder.com/500x300?text=Blog+Image",
    slug: apiBlog.slug,
    excerpt: apiBlog.content
      ? stripHtml(apiBlog.content)
      : "No content available",
    content: apiBlog.content || "",
  };
};

/**
 * Fetch all blog posts
 */
export const fetchAllBlogs = async (): Promise<BlogPost[]> => {
  if (!API_BASE_URL) return [];

  try {
    const response = await fetch(`${API_BASE_URL}/api/blog/posts/`);

    if (!response.ok) {
      console.error(
        `Failed to fetch blogs. Status: ${response.status}`
      );
      return [];
    }

    const data = await response.json();
    const apiBlogs = Array.isArray(data)
      ? data
      : data.posts || data.data || [];

    return apiBlogs.map(transformApiBlog);
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    return [];
  }
};

/**
 * Fetch a single blog post by slug
 */
export const fetchBlogBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  if (!API_BASE_URL) return null;

  try {
    const response = await fetch(`${API_BASE_URL}/api/blog/posts/${slug}/`);

    if (!response.ok) {
      if (response.status === 404) return null;

      console.error(
        `Failed to fetch blog (${slug}). Status: ${response.status}`
      );
      return null;
    }

    const data = await response.json();
    return data ? transformApiBlog(data) : null;
  } catch (error) {
    console.error(
      `Error fetching blog with slug "${slug}":`,
      error
    );
    return null;
  }
};

/**
 * Search blogs
 */
export const searchBlogs = async (
  query: string
): Promise<BlogPost[]> => {
  if (!API_BASE_URL) return [];

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/blog/posts/search?q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      console.error(
        `Search failed. Status: ${response.status}`
      );
      return [];
    }

    const data = await response.json();
    const apiBlogs = Array.isArray(data)
      ? data
      : data.posts || data.data || [];

    return apiBlogs.map(transformApiBlog);
  } catch (error) {
    console.error("Error searching blogs:", error);
    return [];
  }
};
