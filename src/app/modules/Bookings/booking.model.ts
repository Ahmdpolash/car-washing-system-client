import { model, Schema } from "mongoose";

import { Vehicle } from "./booking.constant";
import { TBookings } from "./booking.interface";

const bookingSchema = new Schema<TBookings>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User", // Assuming there's a User model
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    vehicleType: {
      type: String,
      enum: Vehicle,
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
    },
    registrationPlate: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Booking = model<TBookings>("Booking", bookingSchema);
