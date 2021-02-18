'use strict';
const miniget = require('miniget');

const BASE_URL = "https://sponsor.ajay.app";
const ALL_CATEGORIES = ["sponsor", "intro", "outro", "interaction", "selfpromo", "music_offtopic"];

async function getSegments (videoID, categories = []) {
  let query = `?videoID=${videoID}`;

  if (categories.length > 1) {
    query += `&categories=${JSON.stringify(categories)}`;
  } else if (categories.length === 1) {
    query += `&category=${categories[0]}`;
  }

  try {
    const res = await miniget(`${BASE_URL}/api/skipSegments${query}`).text();
    return JSON.parse(res);
  } catch (error) {
    return [];
  }
}

module.exports = {
  getSegments,
  ALL_CATEGORIES
}
