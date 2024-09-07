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
      const statusNum = $(div)
        .find("li:nth-child(3) g")
        .attr("data-name")
        ?.replace("Group ", "");
      const status =
        statusNum == "3"
          ? "stayingSame"
          : statusNum == "7170"
          ? "movingUp"
          : "fallingDown";
      const img = $(div)
        .find("img.c-lazy-image__img")
        .attr("src")
        ?.replace("180x180", "344x344");
      const thisWeekPos = $(div)
        .find("> li:nth-child(1) span:nth-child(1)")
        .text()
        .trim();
      const lastWeekPos = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(4) span")
        .text()
        .trim();
      const peekPos = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(5) span")
        .text()
        .trim();
      const weeksOnChart = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(6) span")
        .text()
        .trim();
      return {
        title,
        artist,
        img,
        status: thisWeekPos === "-" ? "new" : status,
        thisWeekPos,
        lastWeekPos,
        peekPos,
        weeksOnChart,
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
      const img = $(div)
        .find("img.c-lazy-image__img")
        .attr("src")
        ?.replace("180x180", "344x344");
      const thisWeekPos = $(div)
        .find("> li:nth-child(1) span:nth-child(1)")
        .text()
        .trim();
      const lastWeekPos = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(4) span")
        .text()
        .trim();
      const peekPos = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(5) span")
        .text()
        .trim();
      const weeksOnChart = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(6) span")
        .text()
        .trim();
      return {
        title,
        artist,
        img,
        isNew: thisWeekPos === "-" ? true : false,
        thisWeekPos,
        lastWeekPos,
        peekPos,
        weeksOnChart,
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
      const img = $(div)
        .find("img.c-lazy-image__img")
        .attr("src")
        ?.replace("180x180", "344x344");
      const thisWeekPos = $(div)
        .find("> li:nth-child(1) span:nth-child(1)")
        .text()
        .trim();
      const lastWeekPos = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(4) span")
        .text()
        .trim();
      const peekPos = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(5) span")
        .text()
        .trim();
      const weeksOnChart = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(6) span")
        .text()
        .trim();
      return {
        title,
        artist,
        img,
        isNew: thisWeekPos === "-" ? true : false,
        thisWeekPos,
        lastWeekPos,
        peekPos,
        weeksOnChart,
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
      const img = $(div)
        .find("img.c-lazy-image__img")
        .attr("src")
        ?.replace("180x180", "344x344");
      const thisWeekPos = $(div)
        .find("> li:nth-child(1) span:nth-child(1)")
        .text()
        .trim();
      const lastWeekPos = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(3) span")
        .text()
        .trim();
      const peekPos = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(4) span")
        .text()
        .trim();
      const weeksOnChart = $(div)
        .find("li.lrv-u-width-100p:nth-child(4) > ul > li:nth-child(5) span")
        .text()
        .trim();
      return {
        title,
        artist,
        img,
        isNew: thisWeekPos === "-" ? true : false,
        thisWeekPos,
        lastWeekPos,
        peekPos,
        weeksOnChart,
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
      const img = $(div)
        .find("img.c-lazy-image__img")
        .attr("src")
        ?.replace("180x180", "344x344");
      return {
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

// https://charts-static.billboard.com/img/2024/09/travis-scott-lu8-daysbeforerodeo-5ue-344x344.jpg
// https://charts-static.billboard.com/img/2024/09/travis-scott-lu8-daysbeforerodeo-5ue-180x180.jpg
