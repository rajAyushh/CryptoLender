const express = require("express");
const router = express.Router();
const transactionController = require("../controller/transactionController");

router.get("/", transactionController.viewAllTransactionDetails);

// router.get("/:_id", bookController.viewBookByID);

router.post("/", transactionController.addTransactionDetails);

module.exports = router;
