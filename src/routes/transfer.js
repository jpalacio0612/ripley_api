const router = require("express").Router();
const transferController = require("../controllers/transfer.controller");

router.route("/").get(transferController.list);
router.route("/").post(transferController.create);

module.exports = router;
