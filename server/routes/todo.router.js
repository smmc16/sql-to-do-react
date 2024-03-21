const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "todo";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in GET /todo', error);
            res.sendStatus(500);
        })
})

// POST
router.post('/', (req, res) => {
    const todo = req.body;
    const queryText = `INSERT INTO "todo" ("todo") VALUES ($1)`;

    pool.query(queryText, [todo.todo])
        .then((result) => {
            console.log('Added to todo list', todo)
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error in POST /todo', error)
            res.sendStatus(500);
        })
})
// PUT

// DELETE

module.exports = router;
