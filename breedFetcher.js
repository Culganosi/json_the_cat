// import request
const request = require('request');
//
const breedName = process.argv[2]; // start @ index 2
const link = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // string literal for the URL

request(link, (error, response, body) => {
  if (error) {
    return console.log("fail", error);
  }
  const data = JSON.parse(body); // turn JSON string to object
  const breed = data[0]; // access 1st element in data array // print below if true
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`'fail': didn't find breed ${breedName}`);
  }
});