const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const recipientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    rut: {
      type: String,
      required: [true, "rut is required"],
      unique: true,
      minlength: 9,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
      minlength: 9,
    },
    bank: {
      type: String,
      required: [true, "bank is required"],
    },
    accountType: {
      type: String,
      required: [true, "account type is required"],
    },
    accountNumber: {
      type: String,
      required: [true, "account number is required"],
    },
    transfers: [{ type: Schema.Types.ObjectId, ref: "Transfer" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Recipient", recipientSchema);
