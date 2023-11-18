const express = require('express');
const router = express.Router();
const pool = require('../db');

// Display all entries
router.get('/', (req, res) => {
    pool.query('SELECT * FROM entries', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('index', { entries: results });
        }
    });
});

module.exports = router;
