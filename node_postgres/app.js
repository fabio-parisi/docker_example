const express = require('express');
const fs = require('fs');
const { Pool } = require('pg');

//prendo il il contenuto del config.json
// const config = fs.readFileSync('./config.json');

const app = express();
const port = 3000;


const pool = new Pool({
    "host": "host.docker.internal",
    "database": "mydb",
    "port": 5432,
    "user": "admin",
    "password": "admin"
});



app.get('/', async (req, res) => {
    try {
        const results = await pool.query(`
            SELECT version()
        `);
        res.send(results.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});