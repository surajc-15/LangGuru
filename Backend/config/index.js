import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const connectDB = async () => {
  try {
    const { MONGODB_URI, DB_NAME } = process.env;

    // console.log(process.env);

    if (!MONGODB_URI || !DB_NAME) {
      throw new Error(
        "Missing MONGODB_URI or DB_NAME in environment variables."
      );
    }

    const connectionString = `${MONGODB_URI}/${DB_NAME}`;

    const connectionInstance = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB connected: ${connectionInstance.connection.host}`);
    return connectionInstance;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit on failure
  }
};

// connectDB();
export default connectDB;
