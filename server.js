const express = require('express');
const path = require('path');
const app = express();

// Define the path to your website files
const websitePath = path.join(__dirname, 'public');

// Serve static files (like index.html, style.css, and script.js)
app.use(express.static(websitePath));

// Example API endpoint (optional)
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on https://192.168.80.1:${PORT}`);
});

