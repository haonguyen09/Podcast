const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PodcastSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    status: {type: String, require: true},
    userId: {type: ObjectId, ref: "User", require: false},
    topicId: {type: ObjectId, ref: "Topic", require: false},
    likesCount: { type: Number, require: false, default: 0 },
    likes: {type: Array, ref: "Like", require: false},
    viewsCount: {type: Number, require: false, default: 0},
    duration: {type: Number, require: false, default: 0},
    image: {type: String, require: false},
    audio: {type: String, require: false},
    rating: {type: Object, require: false, default: 0},
    ratings: {type: Array, ref: "Rate", require: false},
    ratingCount: {type: Number, require: false, default: 0},
    ratingAve: {type: Number, require: false, default: 0},
    comments: {type: Array, ref: "Comment", require: false},
}, {versionKey: false, timestamps: true, collection: "Podcast"});

const Podcast = mongoose.model('Podcast', PodcastSchema, "Podcast");

module.exports = Podcast
