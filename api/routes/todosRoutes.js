'use strict';
module.exports = function(app) {
    var todosCtrl = require('../controllers/todosCtrl');

    // just the get tasks route
    app.route('/tasks').get(todosCtrl.findTasks);

};
