const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

let app = express();

//Middleware that parses JSON content to the API
app.use(cors());
app.use(express.json());


//Usee middleware router API Router
app.use('/api', apiRouter);


app.listen(3000);