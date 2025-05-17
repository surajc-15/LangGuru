// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  preferredLanguage: {
    type: String, // e.g., 'Kannada', 'Tamil'
    required: true,
  },
  knownLanguages: {
    type: [String], // e.g., ['English', 'Hindi']
    default: [],
  },
  role: {
    type: String,
    enum: ["learner", "tutor", "admin"],
    default: "learner",
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  lastSeen: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 🔄 Pre-save hook (optional: lowercase username or email)
userSchema.pre("save", function (next) {
  this.username = this.username.toLowerCase();
  this.email = this.email.toLowerCase();
  next();
});

module.exports = mongoose.model("User", userSchema);
