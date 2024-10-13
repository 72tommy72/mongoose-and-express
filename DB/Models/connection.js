import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect("mongodb://localhost:27017/Assignment-5")
    .then((res) => console.log("Db connection success"))
    .catch((err) => console.log("DB connection Fail", err));
};
export default connectDB;
