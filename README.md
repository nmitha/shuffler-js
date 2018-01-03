# shuffler-js
JS functions to generate ordered or shuffled-up arrays.

### Run using node.js
Execute 'node shuffler.js' in your terminal (tested on node 6.10).

### Run using Chrome dev tools
Paste the code into Chrome's dev console up until the line ```// End of solution code```.  It can't run the asserts. 

### If I had more time
* Add better tests, move the tests to a separate file, and use a proper testing framework
* Examples of better tests:
  - Run many times and check that a histogram of the number occurences at each index is approximately uniform (flat distribution).
   - Use a randon number generator that takes a seed value in order to get repeatable results that could be used for further tests.
* Make this an npm module
