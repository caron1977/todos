// this is my global task variable
tasks = [{id: 0, task: "Brot kaufen"}, {id: 1, task: "Eis essen"}];

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
