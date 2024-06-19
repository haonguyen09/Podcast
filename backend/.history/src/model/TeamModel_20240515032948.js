const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TeamSchema = new Schema({
  name: {type: String, require: true},
  members: {type: ObjectId, ref: "User", require: false}
}, {versionKey: false, timestamps: true, collection: "Team"});

const Team = mongoose.model('Team', TeamSchema, "Team");

module.exports = Team
