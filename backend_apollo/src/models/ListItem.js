import mongoose from "mongoose";

export const ListItem = mongoose.model("ListItem", {
  text: String,
  timeCreated: String,
  timeModified: String,
});