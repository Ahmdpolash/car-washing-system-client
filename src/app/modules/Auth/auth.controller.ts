import catchAsync from "../../utils/catchAsync";
import { userServices } from "./auth.services";


const createUser = catchAsync(async (req, res) => {
  const result = await userServices.createUserIntoDb(req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User registered successfull",
    data: result,
  });
});

const getUser = catchAsync(async (req, res) => {
  const result = await userServices.getUsersFromDb();

  res.status(200).json({
    success: true,
    message: "User retrived successfully",
    data: result,
  });
});

export const UserController = {
  createUser,
  getUser,
};
