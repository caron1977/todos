'use strict';
module.exports = function(app) {

    var todosCtrl = require('../controllers/todosCtrl');

    // C - REATE Operation
    app.route('/create-task').post(todosCtrl.createTask);

    // R - EAD Operation (one)
    app.route('/task').get(todosCtrl.findOneTask);

    // R - EAD Operation (all)
    app.route('/tasks').get(todosCtrl.findTasks);

    // U - PDATE Operation
    app.route('/update-task').post(todosCtrl.updateTask);

    // D - DELETE Operation
    app.route('/delete-task').post(todosCtrl.deleteTask);
};
