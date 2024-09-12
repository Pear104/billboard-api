import fastify from "fastify";
import charts from "./routes/charts";
import news from "./routes/news";
import stream from "./routes/stream";
const server = fastify();

// Run the server!
// server.register(charts, { prefix: "/charts" });
server.register(news, { prefix: "/news" });
server.register(charts, { prefix: "/charts" });
server.register(stream, { prefix: "/stream" });
server.listen({ port: 3000 }, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  console.log(`Server is now listening on ${address}`);
});
