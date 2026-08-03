import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    type: String,
    message: String,
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

export const Activity = mongoose.model("Activity", activitySchema);