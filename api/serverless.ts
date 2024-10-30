import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import * as dotenv from "dotenv";
import server from "../src/index";
import fastifyCors from "@fastify/cors";
dotenv.config();

// Instantiate Fastify with some config
const app = Fastify({
  logger: false,
});

app.register(fastifyCors, {
  origin: "*",
  methods: "GET",
});
app.register(server, {
  prefix: "/",
});

export default async (req: FastifyRequest, res: FastifyReply) => {
  await app.ready();
  app.server.emit("request", req, res);
};
