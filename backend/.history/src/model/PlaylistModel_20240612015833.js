const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PlaylistSchema = new Schema({
    podcasts: {type: Array, ref: "Podcast", require: false},
    userId: {type: ObjectId, ref: "User", require: false},
    Rating: {type: Number,  require: false, min: 1, max: 5, default: 0}
}, {versionKey: false, timestamps: true, collection: "Playlist"});

const Playlist = mongoose.model('Playlist', PlaylistSchema, "Playlist");

module.exports = Playlist
