const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel
