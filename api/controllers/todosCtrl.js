'use strict';

exports.findTasks = function(req, res) {

    // var tasks = [{task: "todo 1"}, {title: "todo 2"}];
    res.json(tasks);
};

exports.createTask = function(req, res) {

    console.log('Hello from our todos service controller. awesome.');
    res.send('Add a book');
};