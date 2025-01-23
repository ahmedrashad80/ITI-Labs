import { Schema, model, Types } from "mongoose";

const messageSchema = new Schema(
  {
    message: {
      type: String,
      required: [true, "this field is required"],
    },

    receiverId: {
      type: Types.ObjectId,
      ref: "User",
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
  //   timestamp fields are optional to create date fields
);

const messageModel = model("Message", messageSchema);
export default messageModel;
