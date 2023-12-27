import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
			"mongodb+srv://bigdp585:Admin123456789@cluster0.zx39lfb.mongodb.net/?retryWrites=true&w=majority",
		)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
