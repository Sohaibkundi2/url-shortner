import { findUserByEmail, createUser } from "../dao/user.dao.js";
import jwt from "jsonwebtoken";
import { signToken } from "../utils/helper.js";
import bcrypt from "bcrypt";

export const registerUser = async (name, email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser(name, email, hashedPassword);
  if (!newUser) {
    throw new Error("User registration failed");
  }
  const token = signToken({ id: newUser._id });
  return { message: "User registered successfully", token, user: newUser };
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password); // Compare hashed password
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = signToken({ id: user._id });
  return { message: "Login successful", token, user };
};
