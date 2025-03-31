const express = require("express");
const { registerUser } = require("../controllers/user.controllers");
const router = express.Router();
const upload = require("../middlewares/mutlter.middleware");

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

module.exports = router;
