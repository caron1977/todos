// this is my global task variable
tasks = [{id: 0, task: "Brot kaufen"}, {id: 1, task: "Eis essen"}, {id:2, task: "Datenbankverbindung erstellen"}];

// initialize the database connection
const pg = require('pg');
const path = require('path');
const myPSQLCon = process.env.DATABASE_URL || 'postgres://tecitsc_dbuser:1QDEWFKf@java-test.fhws.de:5432/fhws_master_grimmer';

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
