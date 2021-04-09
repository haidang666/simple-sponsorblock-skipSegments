# simple-sponsorblock-skipSegments
only call SponsorBlock get skipSegments, return empty array if there is error

## Install
```
npm install --save haidang666/simple-sponsorblock-skipSegments
```
or 
```
npm install --save ytb-skipsegments
```
## Example 
```node
const { getSegments, ALL_CATEGORIES } = require('simple-sponsorblock-skipsegments');

const videoID = 'l0U7SxXHkPY';

const empty_sponsor = await getSegments(videoID, ["sponsor"]);
console.log('empty_sponsor ---- ', empty_sponsor);

const music_offtopic = await getSegments(videoID, ["sponsor", "music_offtopic"]);
console.log('music_offtopic ---- ', music_offtopic);

const all_categories = await getSegments(videoID, ALL_CATEGORIES);
console.log('all_categories ---- ', all_categories);

```

with option `perttyFormat` return a nice format
```
[
  { category: 'sponsor', startTime: 0, endTime: 11 },
  { category: 'selfpromo', startTime: 11, endTime: 17 },
  { category: 'sponsor', startTime: 943, endTime: 1026 },
  { category: 'outro', startTime: 1026, endTime: 1043 }
]
```