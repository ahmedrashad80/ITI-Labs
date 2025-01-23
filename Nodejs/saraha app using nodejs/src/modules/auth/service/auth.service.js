import userModel from "../../../DB/models/user.model.js";
import * as bcrypt from "bcrypt";
import * as crypto from "crypto";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export let token;
export const register = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword, phone } = req.body;
    console.log(req.body);

    if (password != confirmPassword) {
      return res
        .status(422)
        .json({ massage: "confirmPassword do not match with password" });
    }
    if (await userModel.findOne({ email })) {
      return res.status(409).json({ massage: "email already exists" });
    }
    const hashPassword = bcrypt.hashSync(
      password,
      parseInt(process.env.SALT_ROUND)
    );

    let encryptedPhone = null;
    if (phone) {
      encryptedPhone = crypto.createHash("sha256").update(phone).digest("hex");
    }

    const user = await userModel.create({
      email,
      password: hashPassword,
      userName,
      phone: encryptedPhone,
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const confirmationLink = `http://localhost:${
      process.env.PORT || 3033
    }/auth/confirm/${user._id}`;

    await transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Confirm Your Email",
        html: `<p>Hello ${userName},</p>
             <p>Please confirm your email by clicking the link below:</p>
             <a href="${confirmationLink}">Confirm Email</a>`,
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        throw error;
      });

    const objectUser = user.toObject();
    delete objectUser.password;
    token = jwt.sign(
      { id: user._id, isLoggedIn: true },
      process.env.CONFIRM_EMAIL
    );

    res.status(200).json({ massage: "welcome to register", objectUser });
  } catch (err) {
    res.status(500).json({ massage: "server error", err });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ massage: "email not exists" });
    }
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      return res.status(401).json({ massage: "wrong password" });
    }
    const objectUser = user.toObject();
    delete objectUser.password;
    token = jwt.sign(
      { id: user._id, isLoggedIn: true },
      process.env.TOKEN_SECRET_KEY
    );

    res.status(200).json({ massage: "welcome to saraha", token });
  } catch (err) {
    res.status(500).json({ massage: "server error", error: err.message });
  }
};

export const confirmEmail = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findById(id);
    // user is document from database so when use user.save() i match with db  (async process)
    if (!user) {
      return res.status(404).json({ message: "Invalid confirmation link" });
    }

    if (user.isConfirmed) {
      return res.status(400).json({ message: "Email already confirmed" });
    }

    user.isConfirmed = true;
    await user.save();

    res.status(200).json({ message: "Email confirmed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};
