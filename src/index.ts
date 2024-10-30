import fastify, { FastifyInstance } from "fastify";
import charts from "./routes/charts";
import news from "./routes/news";
import stream from "./routes/stream";

export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.register(news, { prefix: "/news" });
  fastify.register(charts, { prefix: "/charts" });
  fastify.register(stream, { prefix: "/stream" });
  done();
}

// Run the server!
// server.register(charts, { prefix: "/charts" });
// server.listen({ port: 3000 }, function (err, address) {
//   if (err) {
//     server.log.error(err);
//     process.exit(1);
//   }

//   console.log(`Server is now listening on ${address}`);
// });
