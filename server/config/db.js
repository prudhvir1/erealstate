import mongoose, { mongo } from "mongoose";

const connectDB = async () => {};
try {
  const conn = await mongoose.connect(
    "mongodb+srv://erealstate:erealstate123@erealstate.eayqx5b.mongodb.net/erealstate?retryWrites=true&w=majority"
  );
  console.log(`MongoDB Conncected ${conn.connection.host}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

export default connectDB;
