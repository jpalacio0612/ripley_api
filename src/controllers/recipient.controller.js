const Recipient = require("../models/recipient.model");

module.exports = {
  list(req, res) {
    Recipient.find()
      .then((recipients) => res.status(200).json(recipients))
      .catch((error) => res.status(400).json({ error: error.message }));
  },

  create(req, res) {
    const data = req.body;

    Recipient.create(data)
      .then((recipient) => res.status(201).json(recipient))
      .catch((error) => res.status(400).json({ error: error.message }));
  },
};
