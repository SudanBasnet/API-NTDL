import mongoose from "mongoose";
const mongoURL = "mongodb://localhost:27017/online_ntdl";

export const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(mongoURL);
    conn && console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
