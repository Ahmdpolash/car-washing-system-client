import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/auth/signup", UserController.createUser);
router.get("/", UserController.getUser);

export const userRoutes = router;
