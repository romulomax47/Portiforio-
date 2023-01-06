const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const PORT = 5000;             
const rountApi = require('./src/rounter/api.js')

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, "./src/public")))
app.use('/api', rountApi)






app.listen(PORT)