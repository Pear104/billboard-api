import fastify from "fastify";
import * as cheerio from "cheerio";
const server = fastify();

server.get("/hot-100", async (request, reply) => {
  const html = await fetch("https://www.billboard.com/charts/hot-100").then(
    (res) => res.text()
  );
  const $ = cheerio.load(html);
  const data = $("div.chart-results-list ul.o-chart-results-list-row")
    .map((i, div) => {
      const title = $(div).find("h3#title-of-a-story").text().trim();
      const artist = $(div).find("span.c-label.a-no-trucate").text().trim();
      const img = $(div).find("img.c-lazy-image__img").attr("src");
      return {
        title,
        artist,
        img,
      };
    })
    .get();

  reply.send(data);
});

server.get("/billboard-200", async (request, reply) => {
  const html = await fetch(
    "https://www.billboard.com/charts/billboard-200"
  ).then((res) => res.text());
  const $ = cheerio.load(html);
  const data = $("div.chart-results-list ul.o-chart-results-list-row")
    .map((i, div) => {
      const title = $(div).find("h3#title-of-a-story").text().trim();
      const artist = $(div).find("span.c-label.a-no-trucate").text().trim();
      const img = $(div).find("img.c-lazy-image__img").attr("src");
      return {
        title,
        artist,
        img,
      };
    })
    .get();

  reply.send(data);
});

server.get("/billboard-global-200", async (request, reply) => {
  const html = await fetch(
    "https://www.billboard.com/charts/billboard-global-200"
  ).then((res) => res.text());
  const $ = cheerio.load(html);
  const data = $("div.chart-results-list ul.o-chart-results-list-row")
    .map((i, div) => {
      const title = $(div).find("h3#title-of-a-story").text().trim();
      const artist = $(div).find("span.c-label.a-no-trucate").text().trim();
      const img = $(div).find("img.c-lazy-image__img").attr("src");
      return {
        title,
        artist,
        img,
      };
    })
    .get();

  reply.send(data);
});

server.get("/artist-100", async (request, reply) => {
  const html = await fetch("https://www.billboard.com/charts/artist-100").then(
    (res) => res.text()
  );
  const $ = cheerio.load(html);
  const data = $("div.chart-results-list ul.o-chart-results-list-row")
    .map((i, div) => {
      const artist = $(div).find("h3#title-of-a-story").text().trim();
      // const artist = $(div).find("span.c-label.a-no-trucate").text().trim();
      const img = $(div).find("img.c-lazy-image__img").attr("src");
      return {
        artist,
        img,
      };
    })
    .get();

  reply.send(data);
});

server.get("/tiktok-billboard-top-50", async (request, reply) => {
  const html = await fetch(
    "https://www.billboard.com/charts/tiktok-billboard-top-50"
  ).then((res) => res.text());
  const $ = cheerio.load(html);
  const data = $("div.chart-results-list ul.o-chart-results-list-row")
    .map((i, div) => {
      const title = $(div).find("h3#title-of-a-story").text().trim();
      const artist = $(div).find("span.c-label.a-no-trucate").text().trim();
      const img = $(div).find("img.c-lazy-image__img").attr("src");
      return {
        title,
        artist,
        img,
      };
    })
    .get();

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
