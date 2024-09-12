import { FastifyInstance, RegisterOptions } from "fastify";
import * as cheerio from "cheerio";

export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.get("/", async (request, reply) => {
    const html = await fetch(
      `https://www.youtube.com/results?search_query=${
        (request.query as any).name
      }`
    ).then((res) => res.text());
    const $ = cheerio.load(html);
    const nonce = $(`script[data-id=\"_gd\"]`).attr("nonce");
    const nonceScripts = $(`script[nonce="${nonce}"]`)
      .map((i, div) => $(div))
      .get();
    const scriptContent = nonceScripts[23];
    let json = JSON.parse(
      scriptContent.text().replace("var ytInitialData = ", "").slice(0, -1)
    );

    const videos =
      json?.contents?.twoColumnSearchResultsRenderer?.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.filter(
        (item: any) => item.videoRenderer
      );

    // console.log(json?.contents);
    reply.send(videos[0]);
  });
  done();
}
