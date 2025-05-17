// models/Message.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  content: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    ref:"Courses",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 🔄 Pre-save middleware for translation (mock)
messageSchema.pre("save", async function (next) {
  //check for profinity

  next();
});

module.exports = mongoose.model("Message", messageSchema);
