import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import bcrypt from "bcrypt";

//@desc     loginenticate User
//route     /api/users/update
//@access   Private
const updateUser = asyncHandler(async (req, res, next) => {
  const { name, phone, role, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(500).send("Error while updating...");
    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.role = role || user.role;
    user.email = email || user.email;
    user.password = (await bcrypt.hash(password, 10)) || user.password;

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

export { updateUser };
