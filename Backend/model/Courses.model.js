
import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  learners:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:"User"
  },



  createdAt: {
    type: Date,
    default: Date.now,
  },
});


messageSchema.pre("save", async function (next) {
  

  next();
});

module.exports = mongoose.model("Courses", messageSchema);
