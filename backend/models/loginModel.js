const mongoose = require("mongoose");
const Joi = require("joi");

var Schema = mongoose.Schema;

var loginSchema = new Schema(
  {
    publicKey: {
      type: mongoose.Schema.Types.String,
    },
    privateKeyHash: {
      type: mongoose.Schema.Types.String,
    },
    rupeeCoins: {
      type: mongoose.Schema.Types.Number,
      default: 0,
    },
  },
  { collection: "login" }
);

const Login = mongoose.model("Login", loginSchema);

module.exports = { Login };
