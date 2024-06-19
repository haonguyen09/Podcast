const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RateSchema = new Schema({
    podcastId: {type: ObjectId, ref: "Podcast", require: false},
    userId: { type: ObjectId, ref: "User", require: false },
    isRating: {type: Boolean,  require: false, default: false}
    Rating: {type: Number,  require: false, min: 1, max: 5, default: 0}
}, {versionKey: false, timestamps: true, collection: "Rate"});

const Rate = mongoose.model('Rate', RateSchema, "Rate");

module.exports = Rate
