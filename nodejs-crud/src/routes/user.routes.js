const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccesstoken,
} = require("../controllers/user.controllers");
const router = express.Router();
const upload = require("../middlewares/mutlter.middleware");
const { verifyJWT } = require("../middlewares/auth.middleware");

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);
router.route("/login").post(loginUser);

//Secured Routes

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccesstoken);
module.exports = router;
