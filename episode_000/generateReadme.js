const { promises: fs } = require("fs");
const axios = require("axios");
const { items: videos } = require("./videos.json");

(async () => {
  let tableOfContents = "";
  const files = await fs.readdir("../", "utf8");
  files.reverse();
  for (const directory of files) {
    if (directory.startsWith("episode") && directory !== "episode_000") {
      const episodeNum = +directory.replace("episode_", "");
      const solutions = await fs.readdir(`../${directory}`, "utf8");

      const {
        snippet: {
          resourceId: { videoId }
        }
      } = videos[episodeNum - 1];

      tableOfContents += `
## [Episode ${episodeNum}](./${directory})

[Watch on YouTube](https://www.youtube.com/watch?v=${videoId})

`;
      for (const name of solutions) {
        if (name.endsWith(".js")) {
          const slug = name.replace(".js", "");
          const link = `[${slug}](./${directory}/${name})`;
          try {
            const {
              data: {
                url,
                rank: { name: kyu }
              }
            } = await axios.get(
              `https://www.codewars.com/api/v1/code-challenges/${slug}`
            );
            console.log(slug, kyu, url);
            tableOfContents += `* ${link} - [${kyu}](${url})\n`;
          } catch (error) {
            tableOfContents += `* ${link} - ??? kyu\n`;
          }
        }
      }
    }
  }

  await fs.writeFile("contents.md", tableOfContents, "utf8");
})();
