const User = require("../models/User");
module.exports = {
  getProfile: (req, res) => {
    res.render("profile.ejs");
  },
};
