// initialize database pool -->
const Pool = require('pg-pool');
const url = require('url');
// const path = require('path');

const dbparams = url.parse(process.env.DATABASE_URL);
const auth = dbparams.auth.split(':');

const config = {
    user: auth[0],
    password: auth[1],
    host: dbparams.hostname,
    port: dbparams.port,
    database: dbparams.pathname.split('/')[1],
    ssl: true
};

pool = new Pool(config);
// initialize database pool <--

// initialize the application server -->
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing the get tasks route
var routes = require('./api/routes/todosRoutes');
//register the route
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
// initialize the application server -->
