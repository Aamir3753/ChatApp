import { Schema, model } from "mongoose";

interface IMessage {
  roomId: String;
  sender: String;
  content: String;
  encrypted?: Boolean;
  attachments: [String];
}

const messageSchema = new Schema<IMessage>(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    encrypted: {
      type: Boolean,
      default: false,
    },
    attachments: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

const messages = model<IMessage>("Room", messageSchema);

export default messages;
