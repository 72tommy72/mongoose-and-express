import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 20,
      required: true,
    },
    gender: {
      type: String,
      enum: ["female", "male", "not specified"],
      default: "not specified",
    },
    phone: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("User", userSchema);
