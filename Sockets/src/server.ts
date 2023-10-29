import { Server } from "socket.io";
import { jwtAuthentication } from "@src/middlewares/authentication";
import BasicEvents from "@src/events/Basics";

// **** Run **** //

const io = new Server();

//Initialize Event Handlers

io.use(jwtAuthentication);
new BasicEvents(io);

export default io;
