import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./auth.interface";
import { User } from "./auth.model";

// create a new user
const createUserIntoDb = async (payload: TUser) => {
  // check if user already exists
  const isEmailExist = await User.isUserAlreadyExists(payload.email);
  if (isEmailExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "email already registered");
  }
  const result = await User.create(payload);
  return result;
};

//get all users from the database
const getUsersFromDb = async () => {
  const result = await User.find();
  return result;
};

export const userServices = {
  createUserIntoDb,
  getUsersFromDb,
};
