import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()


const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_DB
  } = process.env;

  const options = {
    useUnifiedTopology: true ,
    useNewUrlParser: true,
    connectTimeoutMS: 10000
  };
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?authSource=admin`;
  
async function connectDB() {
  try {
    await mongoose.connect(url, options);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

export default connectDB