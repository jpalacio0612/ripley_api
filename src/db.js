const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2brkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
    .then(() =>
      console.log("Connection with database established successfully")
    )
    .catch((error) => console.log("Something went wrong", error));
}

module.exports = connect;
