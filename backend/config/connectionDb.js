const mongoose = require("mongoose");

const connectDb = async () => {
  console.log("Connection String:", process.env.CONNECTION_STRING); // Debugging line

  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDb;
