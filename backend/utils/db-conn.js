require("dotenv").config();
const mongoose = require("mongoose");
const dbpass = process.env.MONGO_CONNECTION_KEY;
const uri = `mongodb+srv://testuser:${dbpass}@testcluster.d4jgrso.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function dbConn() {
  try {
    mongoose.connect(uri);
    // Connect the client to the server	(optional starting in v4.7)
  } catch (e) {
    console.log(e);
  }
}

module.exports = dbConn;
