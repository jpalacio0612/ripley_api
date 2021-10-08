require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./src/db");
const recipientRouter = require("./src/routes/recipient");
const transferRouter = require("./src/routes/transfer");

const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use("/recipients", recipientRouter);
app.use("/transfers", transferRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
