import { Router } from "express";
import { UserController } from "./auth.controller";

const router = Router();

router.post("/signup", UserController.createUser);
router.get("/user", UserController.getUser);

export const authRoutes = router;
