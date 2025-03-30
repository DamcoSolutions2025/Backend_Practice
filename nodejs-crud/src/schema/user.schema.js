const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ACCESS_TOKEN =
  "Qia9DwyBGXGbq6mT4dxom190rxR2wAAlX0SQRJgRI2svpahehcqi1qQWbtvISR0s";
const REFRESH_TOKEN =
  "scOxGtH3VT8ioTgIOWDbihEggJSesFRt9h1GYtlFYz9L5rArf4lIoqYju1F8eokC";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //Cloudinary url
      required: true,
    },
    coverImage: {
      type: String, //Cloudinary url
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    ACCESS_TOKEN,
    {
      expiresIn: "1d",
    }
  );
};
userSchema.methods.generateRefreshToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
    },
    REFRESH_TOKEN,
    {
      expiresIn: "10d",
    }
  );
};

export const User = mongoose.model("User", userSchema);
