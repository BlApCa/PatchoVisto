'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.use('/', router);

app.listen(PORT, HOST, () => {
    console.log(`localhost://${HOST}:${PORT}`);
});