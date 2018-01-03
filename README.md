# shuffler-js
JS functions to generate ordered or shuffled-up arrays.

### Run using Node.js
Execute ```node shuffler.js``` in your terminal.

Tested on Node.js 6.10.  Don't use an ancient version of Node.js because the code uses some modern ES6.

### Run using Chrome dev tools
Paste the code into Chrome's dev console up until the line ```// End of solution code```.  It can't run the asserts. 

### If I had more time
* Add better tests, move the tests to a separate file, and use a proper testing framework
* Examples of better tests:
  - Run many times and check that a histogram of the number occurences at each index is approximately uniform (flat distribution).
   - Use a random number generator that takes a seed value, so that we can get repeatable results that could be used for further tests.
* Turn this into an npm module
