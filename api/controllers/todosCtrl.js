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

    console.log('try updating a task: %s', req.body);

    pool.query('UPDATE todo SET name = $2 WHERE id = $1', [req.body.id, req.body.name], function (error, resultList) {

        if (error) {

            console.error('Error while updating task. message: %s', error.message);
            res.status(500).json({error: 'Internal server error'});

        } else {
            console.log('... updated a task.');
            res.sendStatus(200);
        }
    });

};

exports.deleteTask = function(req, res) {

    res.status(500).json({error: 'the operation delete is not yet implemented'});
};