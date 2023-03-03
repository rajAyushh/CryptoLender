const mongoose = require("mongoose");
const Joi = require("joi");

var Schema = mongoose.Schema;

var blockSchema = new Schema(
  {
    height: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    merkleRoot: {
      type: mongoose.Schema.Types.String,
    },
    previousHash: {
      type: mongoose.Schema.Types.String,
    },
    currentHash: {
      type: mongoose.Schema.Types.String,
    },
    nonce: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    difficulty: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
    timestamp: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
  },
  { collection: "block" }
);

const Block = mongoose.model("Block", blockSchema);

// function validateBook(Block) {
//   const schema = Joi.object({
//     author: Joi.string(),
//     name: Joi.name(),
//     bookId: Joi.any(),
//   }).options({ abortEarly: false });
//   return schema.validate(Block);
// }

module.exports = { Block };
