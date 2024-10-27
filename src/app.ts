import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import httpStatus from "http-status";

const app: Application = express();

//! parser
app.use(express.json());
app.use(cors());

//! routes
app.use("/api/v1", router);

app.get("/", async (req: Request, res: Response) => {
  res.send("Car Wash Booking System ...");
});

//middleware
app.use(globalErrorHandler);

// not found route
app.all("*", (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    message: "Not Found",
  });
});

export default app;
