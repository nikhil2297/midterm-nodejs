// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serve the static files in the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle root route and return index.html
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
