const mongoose = require("mongoose");
const Joi = require("joi");

var Schema = mongoose.Schema;

var loginSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    publicKey: {
      type: mongoose.Schema.Types.String,
    },
    privateKeyHash: {
      type: mongoose.Schema.Types.String,
    },
    rupeeCoins: {
        type:mongoose.Schema.Types.Number,
        default:0,
    }
  },
  { collection: "login" }
);

const Login = mongoose.model("Login", loginSchema);

function validateBook(Login) {
  const schema = Joi.object({
    author: Joi.string(),
    name: Joi.name(),
    bookId: Joi.any(),
  }).options({ abortEarly: false });
  return schema.validate(Login);
}

module.exports = { Login, validateBook };
