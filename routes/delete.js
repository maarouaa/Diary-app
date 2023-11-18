const express = require('express');
const router = express.Router();
const pool = require('../db');

// Delete an entry
router.post('/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM entries WHERE id = ?', [id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;
