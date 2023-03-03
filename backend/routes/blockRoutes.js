const express = require("express");
const router = express.Router();
const blockController = require("../controller/blockController");

router.get("/", blockController.viewAllBlocks);

// router.get("/:_id", bookController.viewBookByID);

router.post("/", blockController.addBlockDetails);

module.exports = router;
