import { Schema, model } from "mongoose";
import { UserRoles } from "@src/constants/enums";

interface IRoom {
  name: String;
  participants: [{ user: String; role: UserRoles }];
}

const roomSchema = new Schema<IRoom>(
  {
    name: {
      type: String,
      required: true,
    },
    participants: [
      {
        user: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        role: {
          type: String,
          enum: [Object.values(UserRoles)],
          required: true,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const Rooms = model<IRoom>("Room", roomSchema);

export default Rooms;
