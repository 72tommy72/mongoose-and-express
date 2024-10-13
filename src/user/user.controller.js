import { userModel } from "../../DB/Models/user.model.js";

export const getUserModule = async (req, res) => {
  const users = await userModel.find();
  return res.json({ massage: "Done", users });
};

export const addUser = async (req, res, next) => {
  try {
    const { username, email, password, age, gender, phone } = req.body;
    const user = await userModel.create(req.body);
    res.json({ message: "Done", user });
  } catch (error) {
    console.log(error);
    res.json({ message: "Fail", Error: error });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email, password, age, gender, phone } = req.body;
    const user = await userModel.findOneAndReplace(
      { _id: id },
      { username, email, password, age, gender, phone },
      { new: true }
    );
    return res.json({ message: "Done", user });
  } catch (error) {
    console.log(error);
    res.json({ message: "Fail", Error: error });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    return res.json({ message: "Done", user });
  } catch (error) {
    console.log(error);
    res.json({ message: "Fail", Error: error });
  }
};

export const signUp = async (req, res, next) => {
  try {
    const { username, email, password, age, gender, phone, confirmpassword } =
      req.body;
    if (password !== confirmpassword) {
      return res.json({ success: false, message: "password not match!" });
    }
    const user = await userModel.create({
      username,
      email,
      password,
      age,
      gender,
      phone,
    });
    return res.json({
      success: true,
      message: "Sign up successful",
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Sign up failed", error });
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, username, phone, password } = req.body;
    const user = await userModel.findOne({
      $or: [{ email }, { username }, { phone }],
    });

    if (!user) {
      return res.json({ message: "User not found" });
    }
    res.json({ message: "Sign in successful", user });
  } catch (error) {
    console.log(error);
    res.json({ message: "Sign in failed", error });
  }
};

export const searchUsersByAgeRange = async (req, res) => {
  try {
    const users = await userModel.find({
      age: { $gte: 20, $lte: 25 },
    });
    return res.json({ message: "Done", users });
  } catch (error) {
    console.log(error);
    res.json({ message: "Fail", Error: error });
  }
};
