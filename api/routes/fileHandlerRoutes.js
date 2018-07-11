'use strict';
module.exports = function(app) {
  var FileController = require('../controllers/filesController');

  app.route('/api/avatar')
    .post(FileController.uploadAvatar);

};
