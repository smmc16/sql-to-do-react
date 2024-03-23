const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "todo" ORDER BY "id";`;
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
    const queryText = `INSERT INTO "todo" ("todo", "complete") VALUES ($1, false)`;

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

router.delete('/:id', (req, res) => {
    console.log('req.params', req.params);
    let queryText = `DELETE FROM "todo" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in DELETE /todo/:id', error);
            res.sendStatus(500);
        })
});

module.exports = router;
