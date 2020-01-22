const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('../src/routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

let user = 'omnistack';
let password = 'omnistack';
let db = 'week10';

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-q4y1o.mongodb.net/${db}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);