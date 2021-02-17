'use strict';

const miniget = require('miniget');

miniget('http://mywebsite.com', (err, res, body) => {
  console.log('webpage contents: ', body);
});

// with await
let body = await miniget('http://yourwebsite.com').text();

// from here
const serverAddress = "https://sponsor.ajay.app";
const categoryList = ["sponsor", "intro", "outro", "interaction", "selfpromo", "music_offtopic"];