const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if any)
app.use(express.static(path.join(__dirname, 'public')));

// Example API endpoint (replace with your actual endpoints)
app.get('/mobiles, laptops/products', (req, res) => {
    // Example data
    const products = [
        { id: 1, name: 'Mobile Phone', description: 'Description of the mobile phone.', price: '$XXX' },
        { id: 2, name: 'Laptop', description: 'Description of the laptop.', price: '$XXX' }
    ];
    res.json(products);
});

// Handle form submission (example)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Handle form submission logic here (e.g., store data in database)
    console.log(`Received contact form submission: ${name}, ${email}, ${message}`);
    res.status(200).send('Form submission successful.');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
