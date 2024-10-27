import { model, Schema } from "mongoose";
import { TSlots } from "./slot.interface";

const slotSchema = new Schema<TSlots>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ["available", "booked", "canceled"],
      default: "available",
    },
  },
  { timestamps: true }
);

export const Slot = model("Slot", slotSchema);
