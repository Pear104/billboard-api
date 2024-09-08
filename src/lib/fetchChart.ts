import { CheerioAPI } from "cheerio";

export const fetchNormalChart = ($: CheerioAPI) => {
  const data = $(
    "div.chart-results-list div.o-chart-results-list-row-container"
  )
    .map((i, div) => {
      const title = $(div)
        .find("ul.o-chart-results-list-row h3#title-of-a-story")
        .text()
        .trim();
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
        .find("ul.o-chart-results-list-row > li:nth-child(1) span:nth-child(1)")
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
      const awards = $(div)
        .find(
          "div.charts-result-detail div.o-chart-awards div p.c-tagline.a-font-primary-medium-xxs"
        )
        .map((i, p) => $(p).text().trim())
        .get();
      return {
        title,
        artist,
        img,
        status: lastWeekPos === "-" ? "new" : status,
        thisWeekPos,
        lastWeekPos,
        peekPos,
        weeksOnChart,
        awards,
      };
    })
    .get();
  return data;
};

export const fetchTiktokChart = ($: CheerioAPI) => {
  const data = $(
    "div.chart-results-list div.o-chart-results-list-row-container"
  )
    .map((i, div) => {
      const title = $(div)
        .find("ul.o-chart-results-list-row h3#title-of-a-story")
        .text()
        .trim();
      const artist = $(div).find("span.c-label.a-no-trucate").text().trim();
      const img = $(div)
        .find("img.c-lazy-image__img")
        .attr("src")
        ?.replace("180x180", "344x344");
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
      const thisWeekPos = $(div)
        .find("ul.o-chart-results-list-row > li:nth-child(1) span:nth-child(1)")
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
      const newOrReEntry = $(div)
        .find("ul.o-chart-results-list-row > li:nth-child(3) > span")
        .text()
        .replace(/\s+/g, "")
        .trim();
      return {
        title,
        artist,
        img,
        status: newOrReEntry || status,
        thisWeekPos,
        lastWeekPos,
        peekPos,
        weeksOnChart,
      };
    })
    .get();
  return data;
};

export const fetchArtistChart = ($: CheerioAPI) => {
  const data = $("div.chart-results-list ul.o-chart-results-list-row")
    .map((i, div) => {
      const artist = $(div).find("h3#title-of-a-story").text().trim();
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
  return data;
};
