'use strict';

exports.findTasks = function(req, res) {

    console.log('try searching all tasks ...');

    pool.query('SELECT * FROM todo', function (err, resultlist) {

        console.log('... searched tasks. found n:%s',resultlist.rows.length);

        res.json(resultlist.rows);
    });
};

exports.findOneTask = function(req, res) {

    console.log('try finding task with id: %s', req.query.id);

    pool.query('SELECT * FROM todo WHERE id = $1', [req.query.id], function (error, resultList) {

        console.log('... found a task: %s', resultList.rows[0]);

        res.json(resultList.rows[0]);
    });
};

exports.createTask = function(req, res) {

    console.log('try creating new task: %s', req.body);

    pool.query('INSERT INTO todo (name) VALUES ($1)', [req.body.name], function (error, resultList) {

        if (error) {

            console.error('Error while creating task. message: %s', error.message);
            res.status(500).json({error: 'Internal server error'});

        } else {
            console.log('... created new task.');
            res.sendStatus(200);
        }
    });
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

exports.deleteTask = function(req, res) {

    // the task to delete in json format
    var taskDto = req.body;

    // find the task to delete in the task list
    var taskEntity = tasks[taskDto.id];

    // delete the task
    tasks.splice(taskEntity.id)

    // echo the newly updated tasks list
    res.send(tasks);
};