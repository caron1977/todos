'use strict';
module.exports = function(app) {
    var todosCtrl = require('../controllers/todosCtrl');

    // C - REATE Operation
    app.route('/create-new-task').post(todosCtrl.createTask);

    // R - EAD Operation
    app.route('/tasks').get(todosCtrl.findTasks);


};
