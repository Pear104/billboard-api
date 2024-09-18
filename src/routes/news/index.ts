import { FastifyInstance, RegisterOptions } from "fastify";
import * as cheerio from "cheerio";
import { fetchNews } from "../../lib/fetchNews";

export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.get("/", async (request, reply) => {
    const html = await fetch(
      `https://www.billboard.com/t/global${
        (request.query as any).page
          ? `/page/${(request.query as any).page}`
          : ""
      }`
    ).then((res) => res.text());
    const $ = cheerio.load(html);
    const data = fetchNews($);
    reply.send(data);
  });

  fastify.get("/arabia", async (request, reply) => {
    const html = await fetch(
      `https://www.billboard.com/t/billboard-arabia${
        (request.query as any).page
          ? `/page/${(request.query as any).page}`
          : ""
      }`
    ).then((res) => res.text());
    const $ = cheerio.load(html);
    const data = fetchNews($);
    reply.send(data);
  });

  fastify.get("/post", async (request, reply) => {
    // Access the dynamic parameter from the request
    const postUrl = (request.query as any).url;
    const html = await fetch(`https://www.billboard.com/${postUrl}`).then(
      (res) => res.text()
    );
    const $ = cheerio.load(html);
    const returnData = {
      title: $(".article-title").text(),
      excerpt: $(".article-excerpt").text(),
      thumbnail: {
        url: $(".featured-image .c-lazy-image__img").attr("src"),
        description: $(".featured-image .c-figcaption__inner span").text(),
        cite: $(".featured-image .c-figcaption__inner cite").text(),
      },
      content: $(".pmc-paywall > div, .pmc-paywall > p")
        .toArray()
        .map((p) => $(p).html()),
    };
    reply.send(returnData);
  });

  done();
}
