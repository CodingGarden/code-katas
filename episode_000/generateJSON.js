const { promises: fs } = require('fs');
const axios = require('axios');
const { items: videos } = require('./videos.json');

(async () => {
  const katas = [];
  const files = await fs.readdir('../', 'utf8');
  files.reverse();
  for (const directory of files) {
    if (directory.startsWith('episode') && directory !== 'episode_000') {
      const episodeNum = +directory.replace('episode_', '');
      const solutions = await fs.readdir(`../${directory}`, 'utf8');

      const {
        snippet: {
          resourceId: {
            videoId
          }
        }
      } = videos[episodeNum - 1];

      const video = `https://www.youtube.com/watch?v=${videoId}`;

      for (const name of solutions) {
        if (name.endsWith('.js')) {
          const slug = name.replace('.js', '');
          const githubUrl = `https://github.com/CodingGarden/code-katas/blob/master/${directory}/${name}`;
          try {
            const { data: { name: kataName, rank: { id: kyu } } } = await axios.get(`https://www.codewars.com/api/v1/code-challenges/${slug}`);
            console.log(slug, kyu);
            katas.push({
              episodeNum,
              video,
              slug,
              githubUrl,
              kataName,
              kyu
            });
          } catch (error) {
            katas.push({
              episodeNum,
              video,
              slug,
              githubUrl,
              kataName: slug,
              kyu: null
            });
          }

        }
      }
    }
  }

  await fs.writeFile('katas.json', JSON.stringify(katas, 2), 'utf8');
})();

