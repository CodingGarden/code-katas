function songDecoder(song) {
  // split the string on WUB
  const split = song.split('WUB');
  console.log(split);

  // filter out empty strings
  const words = split.filter(word => word.trim());
  console.log(words);

  // join back together on a space
  const result = words.join(' ');

  return result;
}

function songDecoder(song) {
  return song.replace(/(WUB)+/g, ' ').trim();
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));  
