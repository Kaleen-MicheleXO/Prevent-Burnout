const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile.js");
const { ensureAuth } = require("../middleware/auth");

router.get("/", profileController.getProfile);
module.exports = router;
