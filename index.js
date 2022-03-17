// import request
const request = require('request');
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; // start @ index 2

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    return console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});

