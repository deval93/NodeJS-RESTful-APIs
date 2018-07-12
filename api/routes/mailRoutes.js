'use strict';
module.exports = function(app) {
  var MailController = require('../controllers/mailController');

  // todoList Routes
  app.route('/send/mail')
    .get(MailController.sendMail);

};
