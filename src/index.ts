import fastify from "fastify";
import * as cheerio from "cheerio";
import {
  fetchArtistChart,
  fetchNormalChart,
  fetchTiktokChart,
} from "./lib/fetchChart";
const server = fastify();

server.get("/hot-100", async (request, reply) => {
  const html = await fetch("https://www.billboard.com/charts/hot-100").then(
    (res) => res.text()
  );
  const $ = cheerio.load(html);
  const data = fetchNormalChart($);
  reply.send(data);
});

server.get("/billboard-200", async (request, reply) => {
  const html = await fetch(
    "https://www.billboard.com/charts/billboard-200"
  ).then((res) => res.text());
  const $ = cheerio.load(html);
  const data = fetchNormalChart($);

  reply.send(data);
});

server.get("/billboard-global-200", async (request, reply) => {
  const html = await fetch(
    "https://www.billboard.com/charts/billboard-global-200"
  ).then((res) => res.text());
  const $ = cheerio.load(html);
  const data = fetchNormalChart($);

  reply.send(data);
});

server.get("/tiktok-billboard-top-50", async (request, reply) => {
  const html = await fetch(
    "https://www.billboard.com/charts/tiktok-billboard-top-50"
  ).then((res) => res.text());
  const $ = cheerio.load(html);
  const data = fetchTiktokChart($);

  reply.send(data);
});

server.get("/artist-100", async (request, reply) => {
  const html = await fetch("https://www.billboard.com/charts/artist-100").then(
    (res) => res.text()
  );
  const $ = cheerio.load(html);
  const data = fetchArtistChart($);

  reply.send(data);
});

// Run the server!
server.listen({ port: 3000 }, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  console.log(`Server is now listening on ${address}`);
});
