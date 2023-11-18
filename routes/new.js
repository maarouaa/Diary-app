const express = require('express');
const router = express.Router();
const pool = require('../db');

// Display the form to add a new entry
router.get('/', (req, res) => {
    res.render('new');
});

// Add a new entry
router.post('/', (req, res) => {
    const { title, content } = req.body;
    pool.query('INSERT INTO entries (title, content) VALUES (?, ?)', [title, content], (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;
