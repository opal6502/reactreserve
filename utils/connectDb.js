import mongoose from 'mongoose';

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // use existing connection
    console.log('Using existing DB connection');
    return;
  }
  // use a new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DB connected');
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
