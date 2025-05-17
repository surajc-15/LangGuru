import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function (next) {
  this.userName = this.userName.toLowerCase();
  this.email = this.email.toLowerCase();
  next();
});

const User = mongoose.model("User", userSchema);

async function ensureCollectionExists() {
  const collections = await mongoose.connection.db.listCollections().toArray();
  const collectionNames = collections.map((col) => col.name);

  if (!collectionNames.includes("users")) {
    await mongoose.connection.db.createCollection("users");
    console.log("Users collection created");
  }
}

export default { User, ensureCollectionExists };