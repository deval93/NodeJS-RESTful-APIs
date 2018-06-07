'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: [{
      type: String,
      enum: ['admin', 'student', 'teacher']
    }],
    default: ['student']
  }
});

UserSchema.set('collection', 'users');

module.exports = mongoose.model('Users', UserSchema);
