import mongoose, { Connection } from "mongoose";

let isConnected: Connection | null = null;

const connectToDB = async (): Promise<Connection> => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return isConnected;
  }
  try {
    const db = await mongoose.connect(
      "mongodb+srv://dhanraj02025:houseofthedragon@cluster0.7agv2vc.mongodb.net/"
    );
    console.log("mongoDB connected");
    isConnected = db.connection;
    return isConnected;
  } catch (err) {
    console.log(err);
    throw new Error("Error connecting to database");
  }
};

export default connectToDB;
