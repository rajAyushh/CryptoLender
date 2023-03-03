const allBooks = require("../routes/bookRoutes");
const loginDetails = require("../routes/loginRoutes");
const transactions = require("../routes/transactionRoutes");
const blocks = require("../routes/blockRoutes");

const express = require("express");
const router = express.Router();

// router.use('/',signIn)
router.get("/", (req, res) => {
  res.status(200).send(`Hello World!`);
  console.log("Hello World!!");
});

router.use("/books", allBooks);
router.use("/login", loginDetails);
router.use("/transaction", transactions);
router.use("/blocks", blocks);

module.exports = router;
