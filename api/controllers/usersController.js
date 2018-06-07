'use strict';

var mongoose = require('mongoose'),
  Users = require('../models/userModel');

exports.allUsers = function(req, res) {
  Users.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.addUser = function(req, res) {
  var newUser = new Users(req.body);
  newUser.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.getOneUser = function(req, res) {
  Users.findById(req.params.userId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.updateUser = function(req, res) {
  Users.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.deleteUser = function(req, res) {
  Users.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
