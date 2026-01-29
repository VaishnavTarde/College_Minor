const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vaishnavtarde_db_user:uzNndJwdhPPlgfkC@cluster0.c7ryzen.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
