import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000,
    });

    mongoose.connection.on('connected', () => {
      console.log("MongoDB Connected");
    });

    mongoose.connection.on('error', (err) => {
      console.error("MongoDB Connection Error:", err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn("MongoDB Disconnected");
    });

  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

export default connectDB;  