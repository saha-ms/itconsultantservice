// server/src/server.js
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());

// --- REPLACE THIS WITH YOUR ACTUAL DATA SOURCE AND LOGIC (e.g., reading from files or a database) ---
// Sample blog post data (in-memory object for this example)
const blogPostsData = {
  'cloud-security': {
    slug: 'cloud-security',
    title: 'The Essential Guide to Cloud Security Best Practices',
    content: '<p>This is the full content of the cloud security article. Learn about encryption, access control, and monitoring in the cloud.</p>',
    author: 'Jane Doe',
    date: '2025-04-09',
    image: '/images/cloud-security.jpg', // Example image path
    excerpt: 'Learn essential cloud security best practices, including encryption and access control.',
    categories: ['cloud-computing', 'security'],
    tags: ['cloud', 'security', 'best practices']
  },
  'ai-in-business': {
    slug: 'ai-in-business',
    title: 'The Future of AI: Transforming Business Operations',
    content: '<p>Explore the transformative potential of Artificial Intelligence in various business sectors, from automation to customer service.</p>',
    author: 'John Smith',
    date: '2025-04-05',
    image: '/images/ai-business.jpg', // Example image path
    excerpt: 'Discover how AI is transforming business operations through automation and customer service.',
    categories: ['artificial-intelligence', 'business'],
    tags: ['ai', 'automation', 'business transformation']
  },
  'data-analytics': {
    slug: 'data-analytics',
    title: 'Mastering Data Analytics: Strategies for Business Growth',
    content: '<p>Discover how effective data analytics can provide crucial insights, drive strategic decision-making, and fuel business growth.</p>',
    author: 'Alice Brown',
    date: '2025-04-01',
    image: '/images/data-analytics.jpg', // Example image path
    excerpt: 'Strategies for mastering data analytics and leveraging insights for business growth.',
    categories: ['data-analytics', 'business'],
    tags: ['data', 'analytics', 'business intelligence']
  },
  'web-development-trends': {
    slug: 'web-development-trends',
    title: 'Top 5 Web Development Trends in 2025',
    content: '<p>Stay ahead of the curve with the latest trends in web development, including frameworks and technologies.</p>',
    author: 'Bob Williams',
    date: '2025-03-25',
    image: '/images/web-dev.jpg', // Example image path
    excerpt: 'An overview of the top 5 web development trends shaping the industry in 2025.',
    categories: ['web-development'],
    tags: ['web development', 'frontend', 'backend', 'javascript']
  },
  'cybersecurity-tips': {
    slug: 'cybersecurity-tips',
    title: 'Essential Cybersecurity Tips for Small Businesses',
    content: '<p>Protect your small business from cyber threats with these crucial cybersecurity tips and practices.</p>',
    author: 'Eve Davis',
    date: '2025-03-15',
    image: '/images/cybersecurity.jpg', // Example image path
    excerpt: 'Key cybersecurity tips and practices to help small businesses stay protected online.',
    categories: ['cybersecurity', 'business'],
    tags: ['cybersecurity', 'security', 'small business']
  },
};

// Convert the data object into an array for easier manipulation
const allBlogPostsArray = Object.values(blogPostsData).sort((a, b) => new Date(b.date) - new Date(a.date));

// --- END OF SAMPLE DATA ---

app.get('/', (req, res) => {
  res.send('Welcome to the IT Consultant Service backend!');
});

app.get('/api/services', (req, res) => {
  res.json({ services: ['Consultation', 'Development', 'Support'] });
});

// API route to get all blog posts with pagination and filtering
app.get('/api/posts', (req, res) => {
  const { page = 1, limit = 10, category, search } = req.query;
  const pageNumber = parseInt(page);
  const pageSize = parseInt(limit);

  let filteredPosts = [...allBlogPostsArray];

  if (category) {
    filteredPosts = filteredPosts.filter(post =>
      post.categories && post.categories.includes(category)
    );
  }

  if (search) {
    const searchTerm = search.toLowerCase();
    filteredPosts = filteredPosts.filter(
      post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.author.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm)) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
  }

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  const totalPosts = filteredPosts.length;

  res.json({
    posts: paginatedPosts,
    total: totalPosts,
  });
});

// API route to get a specific blog post by slug
app.get('/api/posts/:slug', async (req, res) => {
  const { slug } = req.params;
  const post = blogPostsData[slug];

  if (post) {
    res.setHeader('Content-Type', 'application/json');
    res.json(post);
  } else {
    res.status(404).json({ message: 'Blog post not found' });
  }
});

// --- Serve React app for all *other* routes ---
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.get('/health', (req, res) => {
  res.send('Backend is healthy!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});