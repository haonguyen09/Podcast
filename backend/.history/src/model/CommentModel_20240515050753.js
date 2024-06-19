const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
  content: {type: String, require: true},
  userId: {type: ObjectId, ref: "User", require: false}
}, {versionKey: false, timestamps: true, collection: "Comment"});

const Comment = mongoose.model('Comment', CommentSchema, "Comment");

module.exports = Comment
