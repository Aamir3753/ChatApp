import Rooms from "@src/models/Rooms";

class RoomsDal {
  getUserRooms = async (userId: string) => {
    return Rooms.findOne({ userId }).lean();
  };
}

export default RoomsDal;
