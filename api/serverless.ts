import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import * as dotenv from "dotenv";
import server from "../src/index";
dotenv.config();

// Instantiate Fastify with some config
const app = Fastify({
  logger: false,
});

// Register your application as a normal plugin.
app.register(server, {
  prefix: "/",
});

export default async (req: FastifyRequest, res: FastifyReply) => {
  await app.ready();
  app.server.emit("request", req, res);
};
