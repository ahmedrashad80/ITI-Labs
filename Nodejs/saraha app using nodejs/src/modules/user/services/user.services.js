import path from "path";
import userModel from "../../../DB/models/user.model.js";
import jwt from "jsonwebtoken";

export const uploadImage = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "id is required in body" });
    }
    const user = await userModel.findById(id);
    if (!user) {
      return res
        .status(400)
        .json({ message: "user not found,please register first" });
    }

    const imagePath = path.resolve(req.file.filename);
    user.image = imagePath;
    await user.save();
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
      message: "Image uploaded successfully",
      file: req.file,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    console.log(decoded);

    const user = await userModel.findByIdAndUpdate(decoded.id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
