'use strict';

exports.findTasks = function(req, res) {

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

exports.updateTask = function(req, res) {

    // the task to update in json format
    var taskDto = req.body;

    // find the task to update in the task list
    var taskEntity = tasks[taskDto.id];

    // update the task
    taskEntity.task = taskDto.task;

    console.log(taskEntity);

    // echo the newly updated task
    res.send(taskEntity);

};