const { promises: fs } = require('fs');
const axios = require('axios');
const { items: videos } = require('./videos.json');

(async () => {
  const katas = [];
  let tableOfContents = `# Code Katas

Search / Filter solutions [here](https://code-katas.now.sh/)
  
# Episodes
  
`;
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

      tableOfContents += `
## [Episode ${episodeNum}](./${directory})

[Watch on YouTube](${video})

`
      const episodeKatas = [];
      for (const name of solutions) {
        if (name.endsWith('.js')) {
          const slug = name.replace('.js', '');
          const githubUrl = `https://github.com/CodingGarden/code-katas/blob/master/${directory}/${name}`;
          try {
            const { data: { name: kataName, url, rank: { name: kyu, id } } } = await axios.get(`https://www.codewars.com/api/v1/code-challenges/${slug}`);
            const link = `[${kataName}](./${directory}/${name})`;
            console.log(slug, kyu);
            episodeKatas.push({
              id,
              item: `* ${link} - [${kyu}](${url})\n`,
              kata: {
                episodeNum,
                video,
                slug,
                githubUrl,
                kataName,
                kyu
              }
            });
          } catch (error) {
            console.log(slug, 'not found...')
          }
        }
      }
      episodeKatas.sort((a, b) => a.id - b.id);
      episodeKatas.forEach(({ item, kata }) => {
        tableOfContents += item;
        katas.push(kata);
      });
    }
  }

  await fs.writeFile('katas.json', JSON.stringify(katas, null, 2), 'utf8');
  await fs.writeFile('../README.md', tableOfContents, 'utf8');
})();

