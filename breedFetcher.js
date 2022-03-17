// import request
const request = require('request');
//
const breedName = process.argv[2]; // start @ index 2
const link = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = (breedName, callback) => {
  request(link, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      callback('Not valid');
    } else {
      callback(null, breed.description);
    }
  });
};

module.exports = { fetchBreedDescription };