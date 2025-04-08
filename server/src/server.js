const express = require('express');
const app = express();
const port = 5000;

// Add this route for the root
app.get('/', (req, res) => {
    res.send('Welcome to the IT Consultant Service backend!');
});

app.get('/api/services', (req, res) => {
    res.json({ services: ['Consultation', 'Development', 'Support'] });
});


// Example API route
app.get('/health', (req, res) => {
    res.send('Backend is healthy!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
