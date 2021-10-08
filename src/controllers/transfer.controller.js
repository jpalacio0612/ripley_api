const Transfer = require("../models/transfer.model");
const Recipient = require("../models/recipient.model");

module.exports = {
  list(req, res) {
    Transfer.find()
      .populate({ path: "recipient", select: "name rut bank accountNumber" })
      .then((transfers) => res.status(200).json(transfers))
      .catch((error) => res.status(400).json({ error: error.message }));
  },

  async create(req, res) {
    const data = req.body;

    const recipient = await Recipient.findById(data.recipientId);
    const transfer = await Transfer.create({ amount: data.amount, recipient });

    recipient.transfers.push(transfer);
    await recipient.save({ validateBeforeSave: false });

    res.status(200).json(transfer);
  },
};
