const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController");

router.get("/", bookController.viewAllBooks);

router.get("/:_id", bookController.viewBookByID);

// router.post("/", bookController.addBook);

module.exports = router;
