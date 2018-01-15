// this is my global task variable
tasks = [{task: "todo 1"}, {task: "todo 2"}];

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
