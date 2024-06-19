const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RateSchema = new Schema({
    podcastId: {type: ObjectId, ref: "Podcast", require: false},
    userId: {type: ObjectId, ref: "User", require: false},
    Rating: {type: Number,  require: false, enum: [1,2,3,4,5], default: 0}
}, {versionKey: false, timestamps: true, collection: "SuggestFollow"});

const SuggestFollow = mongoose.model('SuggestFollow', RateSchema, "SuggestFollow");

module.exports = SuggestFollow
