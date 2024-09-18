import { CheerioAPI } from "cheerio";

export const fetchNews = ($: CheerioAPI) => {
  const data = $("div.story div.a-story-grid")
    .map((i, div) => {
      return {
        thumbnail: $(div).find(".c-lazy-image__img").attr("src"),
        title: $(div)
          .find("h3#title-of-a-story a")
          .text()
          .replace(/\n/g, "")
          .replace(/\t/g, ""),
        url: $(div).find("h3#title-of-a-story a").attr("href"),
        category: {
          title: $(div)
            .find("a.o-category-link")
            .text()
            .replace(/\n/g, "")
            .replace(/\t/g, ""),
          url: $(div).find("a.o-category-link").attr("href"),
        },
        author: {
          title: $(div)
            .find(".c-tagline span")
            .text()
            .replace(/\n/g, "")
            .replace(/\t/g, ""),
          url: $(div).find(".c-tagline a").attr("href"),
        },
        relatedPublishTime: $(div)
          .find("time.c-timestamp")
          .text()
          .replace(/\n/g, "")
          .replace(/\t/g, ""),
      };
    })
    .get();
  return data;
};
