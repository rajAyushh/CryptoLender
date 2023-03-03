const { Transaction } = require("../models/transactionModel");

exports.viewAllTransactionDetails = async (req, res, next) => {
  result = await Transaction.find();
  result.length == 0
    ? next(console.log("No Transaction Details were found..."))
    : res.status(200).json(result);
};

exports.addTransactionDetails = async (req, res, next) => {
  let details = new Transaction(req.body);
  await details.save().then(() => {
    console.log("save data : ", details);
    res.status(201).end();
  });
};
