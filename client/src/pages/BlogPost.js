import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navbarHeight = 60;

  // ... (other variable declarations)

  console.log('BlogPost component mounted');
  console.log('Slug from useParams:', slug);

  useEffect(() => {
    let isMounted = true;
    const apiUrl = `/api/posts/${slug}?timestamp=${new Date().getTime()}`;
    console.log('API URL:', apiUrl);
    console.log('useEffect hook started for slug:', slug);

    setLoading(true);

    fetch(`/api/posts/${slug}`, { // Fetching from the correct API endpoint
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        const contentType = response.headers.get('Content-Type') || '';

        console.log('fetch response:', response);

        if (!response.ok || !contentType.includes('application/json')) {
          throw new Error(`Invalid response format: ${contentType}`);
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setPost(data);

          console.log('Fetched post data:', data);
          console.log('Data received from API:', data);

          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.error('Error fetching post:', error);
          setError(error.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: navbarHeight + 20 }}>Loading blog post...</div>;
  }

  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', marginTop: navbarHeight + 20 }}>
        Error loading blog post: {error}
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ textAlign: 'center', marginTop: navbarHeight + 20 }}>
        Blog post not found.
      </div>
    );
  }

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: 1, padding: '20px', marginTop: '60px' }}>
        {loading && <p style={{ textAlign: 'center' }}>Loading blog post...</p>}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {!loading && !error && post && (
          <div>
            <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>{post.title}</h1>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  marginBottom: '20px',
                  borderRadius: '5px',
                }}
              />
            )}
            <p style={{ fontStyle: 'italic', color: '#777', marginBottom: '10px' }}>
              Published on {post.date} by {post.author}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        )}
      </main>
    </div>
  );
}

export default BlogPost;