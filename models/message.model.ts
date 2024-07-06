import mongoose, { Model, PopulatedDoc, Types } from "mongoose";
import { userDocument } from "./user.model";

export interface IMessage {
  message: string;
  senderId: Types.ObjectId | PopulatedDoc<userDocument>;
  receiverId: Types.ObjectId | PopulatedDoc<userDocument>;
  messageType: "text" | "image";
  isRead: boolean;
}
export interface IMessageDocument extends IMessage, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new mongoose.Schema<IMessageDocument>(
  {
    message: {
      type: String,
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messageType: {
      type: String,
      required: true,
      enum: ["text", "image"],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message: Model<IMessageDocument> =
  mongoose?.models?.Message || mongoose.model("Message", messageSchema);
export default Message;
