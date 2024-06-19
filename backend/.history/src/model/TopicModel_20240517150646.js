const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TopicSchema = new Schema({
  name: {type: String, require: true},
  image: {type: String, require: false},
  icon: {type: String, require: true},
  totalPodcast: {type: Number, require: false, default: 0},
  podcasts: {type: Array, ref: "Podcast", require: false}
}, {versionKey: false, timestamps: true, collection: "Topic"});

const Topic = mongoose.model('Topic', TopicSchema, "Topic");

module.exports = Topic
