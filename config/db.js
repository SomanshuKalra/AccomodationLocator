const mongoose = require('mongoose');
const AppConstants = require('./appConstants');

/**
 * Description: Function to connect application to mongo db. Async function returns a promise.
 * Date: 24 April 2020
 *
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(AppConstants.CONTENT_MESSAGES.GENERIC_MESSAGES.DB_CONNECTED);
  } catch (err) {
    console.log(err.message);

    //Exit with status 1
    process.exit(1);
  }
};

module.exports = connectDB;
