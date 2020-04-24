/**
 * Author: Somanshu Kalra
 * Description: File to instantiate server and different modules
 * Date: 23 April 2020
 *
 */
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const AppConstants = require('./config/appConstants');
const PORT = process.env.PORT;
const connectDB = require('./config/db');

//Connect to mongo db
connectDB();

//Initialize middleware to parse the body in JSON format
app.use(
  express.json({
    extended: false,
  })
);

//Defining cors middleware
app.use(cors());

//Define routes
//app.use(routes);

//Test GET request to check if server is running or not
app.get('/', (req, res) => {
  res.send(AppConstants.CONTENT_MESSAGES.GENERIC_MESSAGES.API_RUNNING);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
