const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["student", "teacher", "admin"]
  }
});

module.exports = mongoose.model("User", UserSchema);
