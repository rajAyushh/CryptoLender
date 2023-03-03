const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController");

router.get("/", loginController.viewAllLoginDetails);

// router.get("/:_id", bookController.viewBookByID);

router.post("/", loginController.addLoginDetails);

module.exports = router;
