const express = require("express");
const pg = require('pg');

const app = express();
const { Pool } = pg;

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT || 5432,
});

app.get('/', async (req, res) => {
    try {
        const client = await pool.connect();
        client.release();
        res.status(200).send('<h1>It works!</h1>');
    } catch (err) {
        console.error('Database connection error:', err);
        res.status(500).send('<h1>It failed</h1>');
    }
});

module.exports.createServer = () => app;
module.exports.pool = pool;
