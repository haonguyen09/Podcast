const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FollowingSchema = new Schema({
  followings: {type: ObjectId, ref: "User", require: false}
}, {versionKey: false, timestamps: true, collection: "Following"});

const Following = mongoose.model('Following', FollowingSchema, "Following");

module.exports = Following
