const mongoose = require('mongoose');

const connectDB = async () => {
  try{
    const conn  = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected at: ${conn.connection.host}`)
  }catch(error){
    console.log(`MongoDB connection error: ${error}`)
    process.exit(1)

  }
};

module.exports = connectDB





// const mongoose = require('mongoose');
// require('dotenv').config(); // Make sure to load the .env file

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log(`MongoDB connected at: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`MongoDB connection error: ${error}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;





