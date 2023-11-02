import User from "../models/userModels.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//@desc     Login User
//route     /api/auth/login
//@access   Public
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("Invalid Credentials");
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send("Invalid Credentials");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true }).status(200).json(user);
  } catch (error) {
    next(error);
  }
});

//@desc     Signup User
//route     /api/auth/signup
//@access   Public
const signupUser = asyncHandler(async (req, res, next) => {
  const { name, phone, role, email, password } = req.body;

  const mailExists = await User.findOne({ email });
  const phoneExists = await User.findOne({ phone });

  if (mailExists || phoneExists) {
    res.status(400);
    throw new Error("User Alreay Exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    phone,
    role,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

//@desc     Logout User
//route     /api/auth/logout
//@access   Private
const logoutUser = asyncHandler(async (req, res) => {
  if (!req.cookies.access_token) return res.status(401).send("Not Authorised");
  res.clearCookie("access_token").status(200).send("Logout successfully!");
});

export { loginUser, signupUser, logoutUser };
