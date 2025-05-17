// models/Message.js
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  messageType: {
    type: String,
    enum: ["text", "image", "audio"],
    default: "text",
  },
  content: {
    type: String,
    required: true,
  },
  language: {
    type: String, // e.g., 'Kannada', 'Hindi'
    required: true,
  },
  isTranslated: {
    type: Boolean,
    default: false,
  },
  translatedContent: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 🔄 Pre-save middleware for translation (mock)
messageSchema.pre("save", async function (next) {
  const message = this;

  if (message.messageType === "text" && !message.isTranslated) {
    // Simulated translation (in production, call external translation API here)
    message.translatedContent = `Translated(${message.language}): ${message.content}`;
    message.isTranslated = true;
  }

  next();
});

module.exports = mongoose.model("Message", messageSchema);
