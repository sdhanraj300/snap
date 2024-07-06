import mongoose, { Model } from "mongoose";

export interface chatInterface {
  users: mongoose.Types.ObjectId[];
  messages: mongoose.Types.ObjectId[];
}

export interface chatDocument extends mongoose.Document, chatInterface {
  createdAt: Date;
  updatedAt: Date;
}

const chatSchema = new mongoose.Schema<chatDocument>(
  {
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);
const Chat: Model<chatDocument> =
  mongoose.models.Chat || mongoose.model("Chat", chatSchema);
export default Chat;
