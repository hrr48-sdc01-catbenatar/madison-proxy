const express = require('express');
require('newrelic');

const app = express();

const PORT = 3000;
const HOST = 'localhost';

app.use(express.static(__dirname));

app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to the 4 services present in the Team 1 SDC project.');
});

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Proxy running on ${HOST}:${PORT}`);
});
