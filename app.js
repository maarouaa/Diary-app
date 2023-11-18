const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Use routes
const indexRoutes = require('./routes/index');
const newRoutes = require('./routes/new');
const editRoutes = require('./routes/edit');
const deleteRoutes = require('./routes/delete');

app.use('/', indexRoutes);
app.use('/new', newRoutes);
app.use('/edit', editRoutes);
app.use('/delete', deleteRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
