const { e400 } = require("../../middlewares/errorHandler");
const User = require("../../models/userModel");

exports.index = async (req, res) => {
  try {
    return res.render("index");
  } catch (err) {
    console.log(err.message);
    req.error = err;
    e400(req, res);
  }
};
