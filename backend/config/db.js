const { default: mongoose } = require('mongoose');
const mongooes = require('mongoose');

async function connectDB() {
  try {
    const dbUri = process.env.MONGODB_URI;
    await mongoose.connect(dbUri);
  } catch (error) {
    console.error("DB connection error:", error);
  }
}

module.exports = connectDB;

module.exports = connectDB;
