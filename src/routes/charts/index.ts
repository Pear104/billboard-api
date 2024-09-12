import { FastifyInstance, RegisterOptions } from "fastify";
import * as cheerio from "cheerio";
import {
  fetchArtistChart,
  fetchNormalChart,
  fetchTiktokChart,
} from "../../lib/fetchChart";

export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.get("/hot-100", async (request, reply) => {
    const html = await fetch("https://www.billboard.com/charts/hot-100").then(
      (res) => res.text()
    );
    const $ = cheerio.load(html);
    const data = fetchNormalChart($);
    reply.send(data);
  });

  fastify.get("/billboard-200", async (request, reply) => {
    const html = await fetch(
      "https://www.billboard.com/charts/billboard-200"
    ).then((res) => res.text());
    const $ = cheerio.load(html);
    const data = fetchNormalChart($);
    reply.send(data);
  });

  fastify.get("/billboard-global-200", async (request, reply) => {
    const html = await fetch(
      "https://www.billboard.com/charts/billboard-global-200"
    ).then((res) => res.text());
    const $ = cheerio.load(html);
    const data = fetchNormalChart($);
    reply.send(data);
  });

  fastify.get("/tiktok-billboard-top-50", async (request, reply) => {
    const html = await fetch(
      "https://www.billboard.com/charts/tiktok-billboard-top-50"
    ).then((res) => res.text());
    const $ = cheerio.load(html);
    const data = fetchTiktokChart($);
    reply.send(data);
  });

  fastify.get("/artist-100", async (request, reply) => {
    const html = await fetch(
      "https://www.billboard.com/charts/artist-100"
    ).then((res) => res.text());
    const $ = cheerio.load(html);
    const data = fetchArtistChart($);
    reply.send(data);
  });

  done();
}
