'use strict';
module.exports = function(app) {
  var UsersController = require('../controllers/usersController');

  // todoList Routes
  app.route('/users')
    .get(UsersController.allUsers)
    .post(UsersController.addUser);


  app.route('/users/:userId')
    .get(UsersController.getOneUser)
    .put(UsersController.updateUser)
    .delete(UsersController.deleteUser);
};
