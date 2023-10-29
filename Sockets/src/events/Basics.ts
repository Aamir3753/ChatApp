import Events from "@src/constants/Events";
import { Server, Socket } from "socket.io";
import Messages from "@src/events/Messages";

class BasicEvents {
  constructor(io: Server) {
    io.on(Events.CONNECTION, this.onConnection);
    io.on("disconnect", this.onDisconnect);
  }

  onConnection = (socket: Socket) => {
    new Messages(socket);
    socket.on(Events.DISCONNECT, this.onDisconnect);
  };
  onDisconnect = (reason: String) => {};
}

export default BasicEvents;
