/**
 * Created by Somanshu
 */

"use strict";

var mongo = {
  URI:
    process.env.MONGO_URI ||
    "mongodb+srv://adminuser:QWasxz12!@accomodationlocatorcluster0-10eqp.mongodb.net/test?retryWrites=true&w=majority",
  port: 27017,
};

module.exports = {
  mongo: mongo,
};
