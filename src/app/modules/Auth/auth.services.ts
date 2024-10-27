import { TUser } from "./auth.interface";
import { User } from "./auth.model";

// create a new user
const createUserIntoDb = async (payload: TUser) => {
  // check if user already exists
  //   const isUserExists = await User.isUserExistsByCustomId(payload._id);

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
