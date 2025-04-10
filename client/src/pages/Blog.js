import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css'; // Import CSS module for styling
import { formatDate } from '../utils/dateUtils'; // Assuming a utility for date formatting
import { useSearchParams } from 'react-router-dom'; // For pagination or filtering

const POSTS_PER_PAGE = 10; // Example constant for pagination

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/posts?page=${currentPage}&limit=${POSTS_PER_PAGE}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.posts);
        setTotalPosts(data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const renderPagination = () => {
    if (totalPages <= 1) {
      return null;
    }

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Link
          key={i}
          to={`/blog?page=${i}`}
          className={`${styles.paginationLink} ${currentPage === i ? styles.active : ''}`}
        >
          {i}
        </Link>
      );
    }

    return <div className={styles.pagination}>{pages}</div>;
  };

  if (loading) {
    return <div className={styles.loading}>Loading blog posts...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading blog posts: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Latest Insights</h1>
        <div className={styles.blogList}>
          {posts.map(post => (
            <article key={post.slug} className={styles.blogPreview}>
              <h2 className={styles.postTitle}>
                <Link to={`/blog/${post.slug}`} className={styles.postLink}>
                  {post.title}
                </Link>
              </h2>
              <p className={styles.postMeta}>
                Published on {formatDate(post.date)} by {post.author}
              </p>
              {post.excerpt && <p className={styles.postExcerpt}>{post.excerpt}</p>}
              <Link to={`/blog/${post.slug}`} className={styles.readMoreLink}>
                Read More <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
        {renderPagination()}
      </main>
      <aside className={styles.sidebar}>
        <div className={styles.search}>
          <input type="text" placeholder="Search articles..." className={styles.searchInput} />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.categories}>
          <h3>Categories</h3>
          <ul className={styles.categoryList}>
            <li><Link to="/blog?category=cloud-computing">Cloud Computing</Link></li>
            <li><Link to="/blog?category=cybersecurity">Cybersecurity</Link></li>
            <li><Link to="/blog?category=web-development">Web Development</Link></li>
            {/* Add more categories dynamically from your backend */}
          </ul>
        </div>
        <div className={styles.recentPosts}>
          <h3>Recent Posts</h3>
          <ul className={styles.recentPostList}>
            {/* Fetch and display recent posts */}
            {posts.slice(0, 3).map(recentPost => (
              <li key={recentPost.slug} className={styles.recentPostItem}>
                <Link to={`/blog/${recentPost.slug}`} className={styles.recentPostLink}>
                  {recentPost.title}
                </Link>
                <p className={styles.recentPostDate}>{formatDate(recentPost.date)}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Add more sidebar widgets like author info, newsletter signup, etc. */}
      </aside>
 
    </div>
  );
}

export default Blog;