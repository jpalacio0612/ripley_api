const router = require("express").Router();
const recipientController = require("../controllers/recipient.controller");

router.route("/").get(recipientController.list);
router.route("/").post(recipientController.create);

module.exports = router;
