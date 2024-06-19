const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  name: {type: String, require: true},
  avatar: {type: String, require: false},
  email: {type: String, require: true},
  password: {type: String, require: true},
  occupation: {type: String, require: false},
  role: {type: String, require: true},
  mediaSociety: {type: String, require: false},
  followerId: {type: ObjectId, ref: "Follower", require: false},
  followersCount: {type: Number, require: false, default: 0},
  followingId: {type: ObjectId, ref: "Following", require: false},
  followingsCount: {type: Number, require: false, default: 0},
  suggestFollow: {type: ObjectId, ref: "SuggestFollow", require: false},
  teamId: {type: ObjectId, ref: "Team", require: false}
});

const User = mongoose.model('User', UserSchema);

module.exports = User