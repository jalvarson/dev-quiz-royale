import mongoose from 'mongoose';

export const connectToDatabase = async (uri: string) => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  }
};
