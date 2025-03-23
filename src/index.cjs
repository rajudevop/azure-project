const pg = require('pg');
const { config } = require("dotenv");
const { createServer, pool } = require('./server.cjs');
config();

const port = process.env.PORT || 80;

createServer().listen(port, () => {
    console.log(`Server running on port ${port}`);
});

