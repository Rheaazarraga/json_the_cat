const request = require('request'); // use request library to make http request
const breedName = process.argv[2]; //breed name entered by user
//http request
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
    } 
    const data = JSON.parse(body);//converts the JSON string into an object
    if (!data[0]) {
        console.log(`\n the ${breedName} was not found`);
        return
    }
    if (response.statusCode === 200) {
      console.log(`description: ${data[0].description}`);
    }
  });
