const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  name: String,
  description: String,
  members: Number,
  meeting: String
});

module.exports = mongoose.model("Club", ClubSchema);
