import mongoose from "mongoose";

export const getConnection = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.log("❌ Database Connection Failed");
    console.log(error.message);
  }
};