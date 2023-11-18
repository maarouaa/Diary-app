const express = require('express');
const router = express.Router();
const pool = require('../db');

// Display the form to edit an entry
router.get('/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM entries WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('edit', { entry: results[0] });
        }
    });
});

// Update an entry
router.post('/:id', (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;
    pool.query('UPDATE entries SET title = ?, content = ? WHERE id = ?', [title, content, id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;
