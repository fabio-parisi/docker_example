const express = require('express');
const fs = require('fs');

//prendo il il contenuto del config.json
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(config.dbstrign);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});