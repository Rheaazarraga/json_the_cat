# json_the_cat

### Implement a terminal program that returns a cat breed entered by the user using node's request module and [thecatAPI](https://thecatapi.com/) to access breed descriptions.

#### **[breedFetcher.js](https://github.com/Rheaazarraga/json_the_cat/blob/master/breedFetcher.js)**
*This file contains a function which takes a callback. The HTTP request errors and body are passed into the callback.

**[index.js](https://github.com/Rheaazarraga/json_the_cat/blob/master/index.js)**
*This file is run by the user to fetch a cat breed description. This file contains fetchBreedDescription which is a function call that accepts a callback and prints the breed description if the HTTP request was successful.

**[breedFetcherTest.js](https://github.com/Rheaazarraga/json_the_cat/blob/master/test/breedFetcherTest.js)**
*Contains unit tests for the breedFetcher function with 1 passing test and 1 failing test. This is specifically testing an asynchoronous callback using assert.equal to validate each of the callbacks arguments. At the end of the callback, we use done() to tell mocha that we are done testing.