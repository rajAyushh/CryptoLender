const { Login } = require("../models/bookModel");

exports.viewAllLoginDetails = async (req, res, next) => {
  result = await Login.find();
  result.length == 0
    ? next(console.log("No Login Details were found..."))
    : res.status(200).json(result);
};

exports.addLoginDetails = async(req,res,next) => {
    let details = new Login(req.body)
    await details.save()
    .then(() => {
        console.log('save data : ', details)
        res.status(201).end()
    })
}