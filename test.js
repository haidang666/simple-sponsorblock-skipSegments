const { getSegments, ALL_CATEGORIES } = require('./index.js');

const videoID = 'l0U7SxXHkPY';

async function run() {
  const empty_sponsor = await getSegments(videoID, ["sponsor"]);
  console.log('empty_sponsor ----\n', empty_sponsor);

  const music_offtopic = await getSegments(videoID, ["sponsor", "music_offtopic"]);
  console.log('music_offtopic ----\n', music_offtopic);

  const all_categories = await getSegments(videoID, ALL_CATEGORIES);
  console.log('all_categories ----\n', all_categories);
} 

run();