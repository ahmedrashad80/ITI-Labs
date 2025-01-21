import { Schema, model } from "mongoose";
const roleType = {
  User: "user",
  Admin: "admin",
};
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "this field is required"],
      minlength: 3,
      maxlength: 10,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
      default: "male",
    },

    DOB: Date,

    image: String,
    role: {
      type: String,
      required: true,
      enum: Object.values(roleType),
      default: roleType.Admin,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
  //   timestamp fields are optional to create date fields
);

const userModel = model("User", userSchema);
export default userModel;
