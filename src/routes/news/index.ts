import { FastifyInstance, RegisterOptions } from "fastify";
import * as cheerio from "cheerio";
import {
  fetchArtistChart,
  fetchNormalChart,
  fetchTiktokChart,
} from "../../lib/fetchChart";
import charts from "../charts";

export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.register(charts, { prefix: "/charts" });
  done();
}
