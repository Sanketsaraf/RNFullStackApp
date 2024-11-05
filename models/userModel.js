const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add Name"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "Please add Email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: [true, "Please add Password"],
      min: 6,
      max: 64,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
