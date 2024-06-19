const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PodcastSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    status: {type: String, require: true},
    userId: {type: ObjectId, ref: "User", require: false},
    topicId: {type: ObjectId, ref: "Topic", require: false},
    likesCount: {type: String, require: true},
    viewsCount: {type: String, require: false},
    duration: {type: ObjectId, ref: "Follower", require: false},
    image: {type: Number, require: false, default: 0},
    audio: {type: ObjectId, ref: "Following", require: false},
    rating: {type: Number, require: false, default: 0},
    ratingCount: {type: ObjectId, ref: "SuggestFollow", require: false},
    ratingAve: {type: ObjectId, ref: "Team", require: false},
    comments: {type: ObjectId, ref: "Team", require: false},
}, {versionKey: false, timestamps: true, collection: "User"});

const User = mongoose.model('User', PodcastSchema, "User");

module.exports = User
