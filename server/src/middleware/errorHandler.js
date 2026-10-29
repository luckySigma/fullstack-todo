import mongoose from "mongoose";

export function errorHandler(err, req, res, next) {
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)[0].message;
    return res.status(400).json({ message });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid todo id" });
  }

  console.error(err);
  res.status(500).json({message: "Something went wrong,Please try again"});
}
