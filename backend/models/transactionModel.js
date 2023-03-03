const mongoose = require("mongoose");
const Joi = require("joi");

var Schema = mongoose.Schema;

var transactionSchema = new Schema(
  {
    txnId: {
      type: mongoose.Schema.Types.String,
    },
    sender: {
      type: mongoose.Schema.Types.String,
    },
    recipient: {
      type: mongoose.Schema.Types.String,
    },
    txnHash: {
      type: mongoose.Schema.Types.String,
    },
    quantity: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    interestRate: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    timestamp: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
  },
  { collection: "transaction" }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

// function validateBook(Transaction) {
//   const schema = Joi.object({
//     author: Joi.string(),
//     name: Joi.name(),
//     bookId: Joi.any(),
//   }).options({ abortEarly: false });
//   return schema.validate(Transaction);
// }

module.exports = { Transaction };
