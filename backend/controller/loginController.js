const { Login } = require("../models/loginModel");

exports.viewAllLoginDetails = async (req, res, next) => {
  result = await Login.find();
  result.length == 0
    ? next(console.log("No details were found"))
    : res.status(200).json(result);
};

exports.addLoginDetails = async (req, res, next) => {
  let details = new Login(req.body);
  await details
    .save()
    .then((data) => {
      console.log("save data : ", data);
    })
    .then(() => {
      res.status(201).end();
    });
};
