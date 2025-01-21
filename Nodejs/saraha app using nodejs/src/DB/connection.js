import mongoose from "mongoose";

const connection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/saraha")
    .then(() => console.log("MongoDB Connected..."))
    .catch(() => console.log("DB Connect Failed"));
};

export default connection;
