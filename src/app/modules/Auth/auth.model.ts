import { model, Schema } from "mongoose";

import bcrypt from "bcrypt";
import config from "../../../config";
import { TUser, UserModel } from "./auth.interface";

const userSchema = new Schema<TUser, UserModel>(
  {
    name: { type: String, required: true },
    photo: { type: String, required: false },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["blocked", "in-progress"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  //hashing the pass
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.salt_round));
  next();
});

//post empty string after saving password
userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findById(id);
};

export const User = model<TUser, UserModel>("User", userSchema);
