import mongoose from "mongoose";

const connection = process.env.MONGO_URI;

mongoose
  .connect(connection ?? "mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });

  export default mongoose;
