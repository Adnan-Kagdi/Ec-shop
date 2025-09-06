import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
      console.log("DB Connected");
    });

    mongoose.connection.on('error', (err) => {
      console.error("DB Connection Error:", err);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

export default connectDB;
