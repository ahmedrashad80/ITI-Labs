import messageModel from "../../../DB/models/message.model.js";
import userModel from "../../../DB/models/user.model.js";

export const getMessages = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Receiver ID is required" });
    }

    const messages = await messageModel.find({ receiverId: id }).populate({
      path: "receiverId",
      select: "userName email",
    });

    if (!messages.length) {
      return res.status(404).json({ message: "No messages found" });
    }

    res
      .status(200)
      .json({ message: "Messages retrieved successfully", messages });
  } catch (err) {
    console.error("Error retrieving messages:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const addMessage = async (req, res) => {
  try {
    const { message, receiverId } = req.body;

    if (!message || !receiverId) {
      return res
        .status(400)
        .json({ message: "Message and receiverId are required" });
    }

    const receiver = await userModel.findById(receiverId);
    if (!receiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    const newMessage = await messageModel.create({
      message,
      receiverId,
    });

    res.status(201).json({ message: "Message sent successfully", newMessage });
  } catch (err) {
    console.error("Error adding message:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Message ID is required" });
    }

    const deletedMessage = await messageModel.findByIdAndDelete(id);

    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (err) {
    console.error("Error deleting message:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
