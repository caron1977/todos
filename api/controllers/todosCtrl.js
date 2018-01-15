'use strict';

exports.findTasks = function(req, res) {

    // var tasks = [{task: "todo 1"}, {title: "todo 2"}];
    res.json(tasks);
};

exports.createTask = function(req, res) {

    // the new task sent in json format
    console.log(req.body);

    // add the new task to the tasks list
    tasks.push(req.body);

    // echo the newly updated tasks list
    res.send(tasks);
};