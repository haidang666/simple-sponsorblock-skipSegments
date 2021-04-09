'use strict';
const miniget = require('miniget');

const BASE_URL = "https://sponsor.ajay.app";
const ALL_CATEGORIES = ["sponsor", "intro", "outro", "interaction", "selfpromo", "music_offtopic"];

async function getSegments (videoID, categories = [], prettyFormat = false) {
  let query = `?videoID=${videoID}`;

  if (categories.length > 1) {
    query += `&categories=${JSON.stringify(categories)}`;
  } else if (categories.length === 1) {
    query += `&category=${categories[0]}`;
  }

  try {
    const res = await miniget(`${BASE_URL}/api/skipSegments${query}`).text();
    const jsonRes = await JSON.parse(res);

    return prettyFormat ? formatResponse(jsonRes) : jsonRes;
  } catch (error) {
    return [];
  }
}

function formatResponse(jsonRes) {
  let segments = jsonRes.map(({category, segment}) => {
    return {
      category,
      startTime: Math.round(segment[0]), 
      endTime: Math.round(segment[1])
    };
  });

  segments = segments.sort((a,b) => a.startTime - b.startTime);
  segments = segments.filter( v => {
    for (const s of segments) {
      if (s === v) {
        continue;
      }
      if (v.startTime >= s.startTime && v.endTime <= s.endTime) {
        return false;
      }
    }
    return true;
  });

  return segments;
}


module.exports = {
  getSegments,
  ALL_CATEGORIES
}
