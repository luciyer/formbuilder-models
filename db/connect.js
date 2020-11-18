const mongoose = require("mongoose")

const dbUri = process.env.MONGODB_URI || "mongodb://localhost/dev",
      dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      };

module.exports = async () => {
  try {
    await mongoose.connect(dbUri, dbOptions)
    return console.log(`Successfully connected to ${dbUri}.`)
  } catch (error) {
    return console.error(error)
  }
}
