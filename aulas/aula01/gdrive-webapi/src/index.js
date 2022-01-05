import https from "https";
import fs from "fs";
import { logger } from "./logger.js"; // precisa ter o .js por conta do import
import { Server } from "socket.io";
import Routes from "./routes.js";

const PORT = process.env.PORT || 3000;

const localhostSSL = {
  key: fs.readFileSync("./certificates/key.pem"),
  cert: fs.readFileSync("./certificates/cert.pem"),
};

const routes = new Routes();
const server = https.createServer(
  localhostSSL /*, (req, res) => {
  res.end("Hello World!");
}*/,
  routes.handler.bind(routes)
);

const io = new Server(server, {
  cors: { origin: "*", credentials: false },
}); // plugando um servidor em outro

routes.setSocketInstance(io);
io.on("connection", (socket) => logger.info(`someone connected: ${socket.id}`));

const startServer = () => {
  const { address, port } = server.address();

  logger.info(`app running at https://${address}:${port}`);
};

server.listen(PORT, startServer);
