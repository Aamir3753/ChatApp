import { Socket } from "socket.io";
import Events from "@src/constants/Events";

class Messages {
  constructor(socket: Socket) {
    socket.on(Events.SEND_MESSAGE, this.onSendMessage);
  }
  onSendMessage = (socket: Socket) => {};
}

export default Messages;
