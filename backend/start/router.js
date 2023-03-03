const allBooks = require("../routes/bookRoutes");
const loginDetails = require("../routes/loginRoutes");

const express = require("express");
const router = express.Router();

// router.use('/',signIn)
router.get("/", (req, res) => {
  res.status(200).send(`Hello World!`);
  console.log("Hello World!!");
});

router.use("/books", allBooks);
router.use("/login", loginDetails);

module.exports = router;
