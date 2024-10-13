import { postModel } from "../../DB/Models/post.model.js";
import { userModel } from "./../../DB/Models/user.model.js";

export const addPost = async (req, res, next) => {
  try {
    const { title, content, userID } = req.body;

    const user = await userModel.findById(userID);

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const post = await postModel.create({ title, content, userID: user._id });

    return res.json({ message: "Post added successfully", post });
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to add post", error });
  }
};


export const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await postModel.findOneAndReplace(
      { _id: id },
      { title, content },
      { new: true }
    );
    return res.json({ message: "Done", post });
  } catch (error) {
    console.log(error);
    res.json({ message: "Fail", Error: error });
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await postModel.findByIdAndDelete(id);

    if (!post) {
      return res.json({ message: "Post not found" });
    }

    return res.json({ message: "Post deleted successfully", post });
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to delete post", error });
  }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postModel.find();
    return res.json({ message: "Done", posts });
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to get posts", error });
  }
};

export const getAllNotes = async (req, res, next) => {
  try {
    const notes = await postModel.find().populate("userID");

    return res.json({ message: "Success", notes });
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to get notes", error });
  }
};
